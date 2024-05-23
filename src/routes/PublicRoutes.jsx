import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../layout/Layout'
import HomePage from '../pages/Index/HomePage';
import Products from '../pages/Products/Products'
import ErrorNotFound from '../pages/Error/ErrorNotFound'
import Contact from '../pages/Contact/Contact';
import Favourites from '../pages/Favourites/Favourites';
import Details from '../pages/Details/Details';
import { CartProvider } from '../context/CartContext';
import Basket from '../pages/Basket/Basket';
import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import { StepsProvider } from '../context/StepsContext';

const PublicRoutes = ({ isAuth }) => {


    return (
        <StepsProvider>
            <CartProvider>
                <Layout isAuth={isAuth}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products/:id" element={<Details />} />
                        <Route path='/favorites' element={<Favourites />} />
                        <Route path='/basket' element={<Basket />} />
                        <Route path='/auth/register' element={<Register />} />
                        <Route path='/auth/login' element={<Login />} />
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </StepsProvider>
    )
}

export default PublicRoutes