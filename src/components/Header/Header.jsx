import React, { useContext } from 'react'
import './header.css'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket2Fill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';
import { MdOutlineAccountCircle } from "react-icons/md";


const Header = () => {

    const {items}=useContext(CartContext)

    return (
        <header className='py-3'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <Link to="/">
                                <MdOutlineYoutubeSearchedFor />
                                <span>FEHO</span>

                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-10 ">
                        <nav className='text-end'>
                            <NavLink className="nav-l" to="/">Home</NavLink>
                            <NavLink className="nav-l" to="/products">Products</NavLink>
                            <NavLink className="nav-l" to="/contact">Contact</NavLink>
                            <NavLink className="nav-l" to="/favorites"> <FaRegHeart /></NavLink>
                            <NavLink className="nav-l" to="/basket"> <BsBasket2Fill /><span>{items.length ? items.length :null}</span></NavLink>
                            <NavLink className="nav-l" to="/auth/register"> <MdOutlineAccountCircle /></NavLink>
                        
                        </nav>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header