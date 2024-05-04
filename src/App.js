import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import HomePage from './pages/Index/HomePage';
import Products from './pages/Products/Products'
import ErrorNotFound from './pages/Error/ErrorNotFound'
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
