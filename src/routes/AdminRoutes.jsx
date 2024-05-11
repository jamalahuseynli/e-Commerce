import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import Dashboard from '../admin/Dashboard/Dashboard'
import Categories from '../admin/Categories/Categories'
import Products from '../admin/Products/Products'

const AdminRoutes = () => {
  return (
    <AdminLayout>
        <Routes>
            <Route path='/manage' element={<Dashboard/>}/>
            <Route path='/manage/products' element={<Products/>}/>
            <Route path='/manage/categories' element={<Categories/>}/>
        </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes