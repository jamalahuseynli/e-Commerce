import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
       <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/manage/products'>Products</NavLink>
        <NavLink to='/manage/categories'>Categories</NavLink>
    </aside>
  )
}

export default Sidebar