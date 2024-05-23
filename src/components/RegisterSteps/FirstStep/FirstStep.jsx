import React from 'react'
import { useContext } from 'react'
import { TextField, Button } from '@mui/material'
import { StepsContext } from '../../../context/StepsContext'

const FirstStep = () => {
    const {openNextStep,userData,setUserData}=useContext(StepsContext)

    return (
        <div className='first-step mt-5'>
            <TextField required
                label="Email address"
                variant='outlined' 
                value={userData.email}
                onChange={(e)=>setUserData({...userData, email: e.target.value})}/>
            
            <Button className='next-step' onClick={openNextStep}>
                Next
            </Button>

        </div>
    )
}

export default FirstStep