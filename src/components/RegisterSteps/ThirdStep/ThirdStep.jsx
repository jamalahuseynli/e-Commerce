import React, { useContext } from 'react'
import { TextField, Button } from '@mui/material'
import { StepsContext } from '../../../context/StepsContext'

const ThirdStep = () => {
    const {submitUserData, userData,setUserData}=useContext(StepsContext)

    return (
        <div className='third-step mt-5'>
                <TextField required
                    label="City"
                    variant="outlined" 
                    value={userData.address.city}
                    onChange={(e) => setUserData({ ...userData, address: { ...userData.address, city: e.target.value } })}
                />
            <div className="num-street">
                <TextField required
                    label="Street"
                    variant='outlined' 
                    value={userData.address.street}
                    onChange={(e) => setUserData({ ...userData, address: { ...userData.address, street: e.target.value } })}
                />
                <TextField required
                    label="Number"
                    variant='outlined' 
                    type="number"
                    value={userData.address.number}
                    onChange={(e) => setUserData({ ...userData, address: { ...userData.address, number: e.target.value } })}
                />
            </div>
            <TextField required
                    label="Zip-code"
                    variant='outlined' 
                    value={userData.address.zipcode}
                    onChange={(e) => setUserData({ ...userData, address: { ...userData.address, zipcode: e.target.value } })}
                />
                <TextField required
                    label="Phone"
                    variant='outlined' 
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
            <Button type='submit' onClick={(e)=> submitUserData(e)} className='next-step register-btn'>
                Register
            </Button>
        </div>
    )
}

export default ThirdStep