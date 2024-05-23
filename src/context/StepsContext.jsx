import { Children, createContext, useEffect, useState } from "react";
import Register from "../pages/user/Register";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const StepsContext = createContext()


const StepsProvider = ({ children }) => {


    const [currStep, setCurrStep] = useState(1)
    const [userData, setUserData] = useState({
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        address: {
            city: '',
            street: '',
            number: '',
            zipcode: '',
            geolocation: {
                lat: '',
                long: ''
            }

        },
        phone: ''
    })

    const navigate=useNavigate()

    useEffect(() => {
        const getLoc = () => {
            navigator.geolocation.getCurrentPosition(position => {
                setUserData({ ...userData, address: { ...userData.address, geolocation: { ...userData.address.geolocation, long: position.coords.longitude+"", lat: position.coords.latitude+""  } } });
                return;
            })
        }
       
        getLoc()
    }, []);


    const openNextStep = () => {
        setCurrStep(currStep + 1)
        console.log(userData);
    }

    const backPrevStep = (currStep) => {
        setCurrStep(currStep - 1)
        return;
    }

    const submitUserData = async (e) => {
        e.preventDefault()
        try {
            const resp=await axios.post("https://fakestoreapi.com/users", userData)
            toast.success("You have registered successfully!")
            console.log(resp.data);
            navigate("/auth/login")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StepsContext.Provider value={{ currStep, userData, openNextStep, backPrevStep, setUserData, submitUserData }}>
            {children}
        </StepsContext.Provider>
    )
}

export { StepsContext, StepsProvider }