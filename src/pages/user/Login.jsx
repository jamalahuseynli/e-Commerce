import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { AuthContext } from '../../context/AuthContext'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";



const Login = () => {

  const { handleSubmit, loggedUser, setLoggedUser } = useContext(AuthContext)

  const [showPassword, setShowPassword] = useState(false);

  const handleVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='form-container'>
      <form className='p-5 container' action="">
        <h2 className='mb-4 text-white text-center'>Sign In</h2>
        <TextField required
          label="Username"
          variant='outlined'
          value={loggedUser.username}
          onChange={(e)=>setLoggedUser({...loggedUser, username:e.target.value})}
          
        />
        <div className="pass-cont">
          <TextField required label="Password" variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={loggedUser.password}
            onChange={(e)=>setLoggedUser({...loggedUser, password:e.target.value})}
            
          />
          <span className='eye'>
            {showPassword ? <IoEyeOffOutline onClick={handleVisibility} /> : <IoEyeOutline onClick={handleVisibility} />}
          </span>
        </div>

        <Button onClick={(e)=>handleSubmit(e)}  className='login-btn'>
          Login
        </Button>

        <div className="login-link">
          <Link to="/auth/register"> Don't have an account? Go to Register</Link>

        </div>

      </form>
    </div>
  )
}

export default Login