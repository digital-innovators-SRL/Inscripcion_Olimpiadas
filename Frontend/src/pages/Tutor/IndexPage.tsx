import { useEffect, useRef, useState } from 'react';
import { Group, Stack, Text, Image, Progress, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createWorker } from 'tesseract.js';

const extractReceiptData = (text: string) => {
  const transactionMatch = text.match(/transaccion:\s*(\d+)/i);
  const inscriptionMatch = text.match(/ID DE INSCRIPCION\s*(\d+)/i);
  const tutorMatch = text.match(/TUTOR\s*Tutor\s*([\w\sáéíóúÁÉÍÓÚñÑ]+?)(?:\s*MONTO PAGADO|\n|$)/i);
  const amountMatch = text.match(/MONTO PAGADO[:\s]*([\d.,]+)/i);
  return {
    transactionNumber: transactionMatch?.[1] || null,
    inscriptionId: inscriptionMatch?.[1] || null,
    tutor: tutorMatch?.[1].trim() || null,
    amountPaid: amountMatch?.[1] || null,
  };
};

export default function IndexPage() {
  const [isClient, setIsClient] = useState(false);

  // Estados generales
  const [imageData, setImageData] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState('idle');
  const [ocrResult, setOcrResult] = useState('');

  const [transactionNumber, setTransactionNumber] = useState<string | null>(null);
  const [inscriptionId, setInscriptionId] = useState<string | null>(null);
  const [tutor, setTutor] = useState<string | null>(null);
  const [amountPaid, setAmountPaid] = useState<string | null>(null);

  const [pdfOcrResult, setPdfOcrResult] = useState('');
  const [pdfTransactionNumber, setPdfTransactionNumber] = useState<string | null>(null);
  const [pdfInscriptionId, setPdfInscriptionId] = useState<string | null>(null);
  const [pdfTutor, setPdfTutor] = useState<string | null>(null);
  const [pdfAmountPaid, setPdfAmountPaid] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const workerRef = useRef<ReturnType<typeof createWorker> | null>(null);

  useEffect(() => {
    setIsClient(true); // Marcamos que ya estamos en el cliente

    const initWorker = async () => {
      const worker = createWorker({
        logger: (m) => {
          // Solo actualiza estados si es progreso
          if ('progress' in m) {
            setProgress(m.progress);
            setProgressLabel(m.progress === 1 ? 'Done' : m.status);
          }
        },
      });
      workerRef.current = worker;

      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
    };

    initWorker();

    return () => {
      // cleanup async en useEffect
      const cleanup = async () => {
        if (workerRef.current) {
          try {
            await workerRef.current.terminate();
          } catch (e) {
            console.error('Error terminating worker:', e);
          }
          workerRef.current = null;
        }
      };
      cleanup();
    };
  }, []);

  const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => setImageData(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleExtract = async () => {
    if (!imageData || !workerRef.current) return;

    const worker = workerRef.current;
    const { data } = await worker.recognize(imageData);
    setOcrResult(data.text);

    const extracted = extractReceiptData(data.text);
    setTransactionNumber(extracted.transactionNumber);
    setInscriptionId(extracted.inscriptionId);
    setTutor(extracted.tutor);
    setAmountPaid(extracted.amountPaid);
  };

  const handlePdfDrop = async (files: File[]) => {
    if (!isClient) return;

    setPdfLoading(true);
    setPdfOcrResult('');
    setPdfTransactionNumber(null);
    setPdfInscriptionId(null);
    setPdfTutor(null);
    setPdfAmountPaid(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.3.31/build/pdf.worker.mjs';

      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) throw new Error('No se pudo obtener contexto de canvas');

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/png');

      if (!workerRef.current) throw new Error('Worker no inicializado');

      const { data } = await workerRef.current.recognize(dataUrl);
      setPdfOcrResult(data.text);

      const extracted = extractReceiptData(data.text);
      setPdfTransactionNumber(extracted.transactionNumber);
      setPdfInscriptionId(extracted.inscriptionId);
      setPdfTutor(extracted.tutor);
      setPdfAmountPaid(extracted.amountPaid);
    } catch (e) {
      console.error(e);
      setPdfOcrResult('Error procesando el PDF');
    }
    setPdfLoading(false);
  };

  if (!isClient) {
    return <Text>Cargando interfaz...</Text>;
  }

  return (
    <Group align="start" style={{ padding: '10px' }}>
      <Stack style={{ flex: 1 }}>
        <Dropzone onDrop={(files) => loadFile(files[0])} accept={IMAGE_MIME_TYPE} multiple={false}>
          {() => <Text size="xl">Arrastra imagen o haz clic para subir</Text>}
        </Dropzone>
        {!!imageData && <Image src={imageData} alt="Imagen subida" style={{ width: '100%' }} />}
      </Stack>

      <Stack style={{ flex: 1 }}>
        <Dropzone onDrop={handlePdfDrop} accept={['application/pdf']} multiple={false}>
          {() => <Text size="xl">Arrastra PDF o haz clic para subir</Text>}
        </Dropzone>
        {pdfLoading && <Text>Procesando PDF...</Text>}
        {!!pdfOcrResult && (
          <Stack>
            <Text size="xl">Texto OCR del PDF</Text>
            <Text style={{ fontFamily: 'monospace', backgroundColor: '#000', padding: '10px' }}>
              {pdfOcrResult}
            </Text>
          </Stack>
        )}
        {(pdfTransactionNumber || pdfInscriptionId || pdfTutor || pdfAmountPaid) && (
          <Stack>
            <Text size="lg" weight={700}>
              Datos extraídos del PDF
            </Text>
            <Text>Transacción: {pdfTransactionNumber || '-'}</Text>
            <Text>Inscripción: {pdfInscriptionId || '-'}</Text>
            <Text>Tutor: {pdfTutor || '-'}</Text>
            <Text>Monto: {pdfAmountPaid || '-'}</Text>
          </Stack>
        )}
      </Stack>

      <Stack style={{ flex: 1 }}>
        <Button disabled={!imageData} onClick={handleExtract}>
          Extraer texto
        </Button>
        <Text>{progressLabel.toUpperCase()}</Text>
        <Progress value={progress * 100} />

        {!!ocrResult && (
          <Stack>
            <Text size="xl">Texto OCR de la imagen</Text>
            <Text style={{ fontFamily: 'monospace', backgroundColor: '#000', padding: '10px' }}>
              {ocrResult}
            </Text>
          </Stack>
        )}
        {(transactionNumber || inscriptionId || tutor || amountPaid) && (
          <Stack>
            <Text size="lg" weight={700}>
              Datos extraídos
            </Text>
            <Text>Transacción: {transactionNumber || '-'}</Text>
            <Text>Inscripción: {inscriptionId || '-'}</Text>
            <Text>Tutor: {tutor || '-'}</Text>
            <Text>Monto: {amountPaid || '-'}</Text>
          </Stack>
        )}
      </Stack>
    </Group>
  );
}
