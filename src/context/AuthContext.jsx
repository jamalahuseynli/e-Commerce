import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({
        username: "",
        password: ""
    })

    const [token,setToken]=useState(localStorage.getItem("token") || "")


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("https://fakestoreapi.com/auth/login", loggedUser)
            setToken(data.token)
            localStorage.setItem("token", data.token)
            console.log(data.token);
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ handleSubmit, setLoggedUser, loggedUser, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }