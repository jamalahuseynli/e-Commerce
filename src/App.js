import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import HomePage from './pages/Index/HomePage';
import Products from './pages/Products/Products'
import ErrorNotFound from './pages/Error/ErrorNotFound'
import Contact from './pages/Contact/Contact';
import Favourites from './pages/Favourites/Favourites';
import { useState } from 'react';
import Details from './pages/Details/Details';


function App() {
  const [fav, setFav]=useState([])

  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<Products fav={fav} setFav={setFav}/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products/:id" element={<Details/>}/>
          <Route path='/favorites' element={<Favourites fav={fav} setFav={setFav}/>}/>
          <Route path="*" element={<ErrorNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
