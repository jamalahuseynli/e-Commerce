import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";


const LoginHeader = () => {
  return (
    <header className='py-3'>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="logo">
                    <Link to="/">
                        <MdOutlineYoutubeSearchedFor />
                        <span>FEHO</span>

                    </Link>
                </div>
            </div>
        </div>
    </div>

</header>
  )
}

export default LoginHeader