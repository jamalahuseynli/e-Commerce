import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext=createContext()

const CartProvider=({children})=>{
    const [items,setItems]=useState(JSON.parse(localStorage.getItem("products")))
    
    useEffect(()=>{
        localStorage.setItem("products", JSON.stringify(items))

    },[items])

    const addToCart=(product)=>{
        const existProduct=items.find(item=>item.id===product.id)
        if(existProduct===undefined){
            setItems([...items, product])
            toast.success("Product added to cart!")
        }
        else{
            existProduct.count+=1
            setItems([...items])
            toast.success("Product count increased in cart!")

        }
    }

    const removefromCart=(id)=>{
        const filteredItems=items.filter(item=> item.id!==id)
        setItems(filteredItems)
        toast.error("Product deleted successfully!")
    }

    return(
        <CartContext.Provider value={{items, addToCart, removefromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}