import React from 'react'
import './error.css'
import { Link } from 'react-router-dom';

const ErrorNotFound = () => {

  return (
    <div className='not-found'>
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>Error <span className="errorcode">404</span></h1>
        <p className="output first">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <p className="output second">Please try to <Link to='/'>return to the homepage</Link>.</p>
        <p className="output third">Good luck.</p>
      </div>
    </div>
  )
}

export default ErrorNotFound