import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Layout from '../layout/Layout'
import HomePage from '../pages/Index/HomePage';
import Products from '../pages/Products/Products'
import ErrorNotFound from '../pages/Error/ErrorNotFound'
import Contact from '../pages/Contact/Contact';
import Favourites from '../pages/Favourites/Favourites';
import Details from '../pages/Details/Details';

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:id" element={<Details />} />
                <Route path='/favorites' element={<Favourites  />} />
                <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        </Layout>
    )
}

export default PublicRoutes