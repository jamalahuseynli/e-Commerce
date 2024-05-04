import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'
import axios from 'axios'

const Details = () => {
  let { id } = useParams();
  const [item, setItem] = useState({})

  
  console.log(id,"id")

  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setItem(data)
        console.log(data,"dataaaa")

      } catch (error) {
        console.log(error);
      }
    }

    getProductById(id)
  }, [])

  console.log(item,"item")




  return (
    item ? (<div>{id}</div>)
      :
      <Spinner/>

  )
}

export default Details