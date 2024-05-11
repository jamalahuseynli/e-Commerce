import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import { useState } from 'react';
import PublicRoutes from './routes/PublicRoutes'
import AdminRoutes from './routes/AdminRoutes';


function App() {
  const [fav, setFav]=useState([])

  return (
    <div className="App">
      <BrowserRouter> 
        <PublicRoutes/>     
      </BrowserRouter>
    </div>
  );
}

export default App;
