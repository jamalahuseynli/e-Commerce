import React, { useContext, useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import FirstStep from '../../components/RegisterSteps/FirstStep/FirstStep'
import ThirdStep from '../../components/RegisterSteps/ThirdStep/ThirdStep'
import SecondStep from '../../components/RegisterSteps/SecondStep/SecondStep'
import { Stepper, Step, StepLabel } from '@mui/material'
import { StepsContext } from '../../context/StepsContext'
import { MdOutlineArrowBackIos } from "react-icons/md";



const Register = () => {

    const { currStep, userData, backPrevStep } = useContext(StepsContext)

    const [steps, setSteps] = useState([
        "Email address", "Personal Details", "Address Details"
    ])

    const showSteps = (step) => {
        switch (step) {
            case 1:
                return (
                    <>

                        <FirstStep />
                        <div className="login-link">
                            <Link to="/auth/login"> Have an account? Go to Login</Link>

                        </div>
                    </>
                )

            case 2:
                return <SecondStep />

            case 3:
                return <ThirdStep />
            default:
                break;
        }
    }

    return (
        <div className='form-container'>
            <form className='p-5 container' action="">
                {currStep == 1 && <h2 className='mb-4 text-white text-center'>Sign Up</h2>}
                <div className="cont-steps d-flex">
                    {
                        currStep != 1 && <div className="back-to-prev-step">
                            <button onClick={()=>backPrevStep(currStep)}>
                                <MdOutlineArrowBackIos />
                            </button>
                        </div>
                    }
                    <Stepper activeStep={currStep - 1} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>

                {showSteps(currStep)}
                {/* 
                <div className="name-surname">
                    <input type="text" placeholder='Your name...' />
                    <input type="text" placeholder='Your surname...' />
                </div>
                <div className="email-pass mt-5">
                    <input type="email" placeholder='Your email...' />
                    <input type="password" placeholder='Your password...' />
                    <input type="password" placeholder='Confirm password...' />
                </div>
                <div className="next-btn btn">
                    Next
                </div> */}

            </form>
        </div>
    )
}

export default Register