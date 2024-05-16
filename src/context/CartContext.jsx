import { createContext, useEffect, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const [items,setItems]=useState(JSON.parse(localStorage.getItem("products")))
    
    useEffect(()=>{
        localStorage.setItem("products", JSON.stringify(items))

    },[items])

    const addToCart=(product)=>{
        setItems([...items, product])
    }

    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}