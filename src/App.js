import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import PublicRoutes from './routes/PublicRoutes'
import AdminRoutes from './routes/AdminRoutes';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

if (localStorage.getItem("products") === null) {
  localStorage.setItem("products", JSON.stringify([]))
}

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <PublicRoutes/>
        </AuthProvider>
      </BrowserRouter>

      <Toaster position="top-center"
        reverseOrder={false} />
    </div>
  );
}

export default App;
