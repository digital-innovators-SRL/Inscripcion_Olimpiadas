import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    
    <Routes>
      <Route path="/registro" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
