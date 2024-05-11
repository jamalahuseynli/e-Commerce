import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
        <NavLink to='/manage/products'>Products</NavLink>
        <NavLink to='/manage/categories'>Categories</NavLink>
    </aside>
  )
}

export default Sidebar