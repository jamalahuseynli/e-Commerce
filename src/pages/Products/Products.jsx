import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../../components/Product/ProductCard';
import Spinner from '../../components/Spinner/Spinner'

const Products = () => {

  const [products, setProducts] = useState()

  //sorgu bidefe gedir products page acilanda mounting-> [] qoyuruq ki hec bir stateden asili olmasin
  useEffect(() => {
    const getProducts = async () => {
      await axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }

    getProducts()

  }, []);

  return (
    <div className='container mt-4'>
      <div className="row gy-3">
        {
          products ? products.map(item => {
            return (
              <ProductCard products={item} key={item.id} />
            )
          })
          : <Spinner/>
        }
      </div>
    </div>
  )
}

export default Products