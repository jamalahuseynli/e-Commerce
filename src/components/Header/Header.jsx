import React from 'react'
import './header.css'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
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
                            <NavLink className="nav-l" to="/favorites"> <FaRegHeart/></NavLink>
                        </nav>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header