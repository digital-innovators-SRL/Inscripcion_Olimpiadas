import React from 'react';
import Sidebar from '../../components/Sidebar';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F2EEE3]">
      <Sidebar />
      <div className="ml-64 flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard del Administrador</h1>
          <div><button><a href="http://localhost:8000/registro">Register</a></button></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
