import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useContext } from 'react'
import { StepsContext } from '../../../context/StepsContext'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


const SecondStep = () => {
    const { openNextStep, userData, setUserData } = useContext(StepsContext)

    const [showPassword, setShowPassword] = useState(false);

    const handleVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="second-step mt-5">
            <TextField required
                label="First Name"
                variant="outlined"
                value={userData.name.firstname}
                onChange={(e) => setUserData({ ...userData, name: { ...userData.name, firstname: e.target.value } })}
            />
            <TextField required
                label="Last Name"
                variant='outlined'
                value={userData.name.lastname}
                onChange={(e) => setUserData({ ...userData, name: { ...userData.name, lastname: e.target.value } })}
            />
            <TextField required
                label="Username"
                variant='outlined'
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
            <div className="pass-cont">
                <TextField required label="Password" variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}    
                />
                <span className='eye'>
                    {showPassword ? <IoEyeOffOutline onClick={handleVisibility} /> : <IoEyeOutline onClick={handleVisibility} />}
                </span>
            </div>

            <Button className='next-step' onClick={openNextStep}>
                Next
            </Button>
        </div>
    )
}

export default SecondStep