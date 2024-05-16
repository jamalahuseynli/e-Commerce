import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import PublicRoutes from './routes/PublicRoutes'
import AdminRoutes from './routes/AdminRoutes';
import {Toaster} from 'react-hot-toast';

if (localStorage.getItem("products")===null){
  localStorage.setItem("products", JSON.stringify([]))
}

function App() {

  const [isAuth, setIsAuth]=useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        {isAuth ? <AdminRoutes/> : <PublicRoutes/>}
      </BrowserRouter>

      <Toaster position="top-center"
        reverseOrder={false} />
    </div>
  );
}

export default App;
