import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import ProductCard from '../../components/Product/ProductCard';
import Spinner from '../../components/Spinner/Spinner'
// import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';
import { CartContext } from '../../context/CartContext';

const Products = ({ setFav, fav }) => {


  const [products, setProducts] = useState()
  const [categories, setCategory] = useState([])
  const [categorytyped, setCategorytyped] = useState("")

  

  //sorgu bidefe gedir products page acilanda mounting-> [] qoyuruq ki hec bir stateden asili olmasin
  useEffect(() => {


    const getCategories = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories')
        setCategory(data)
      } catch (error) {

      }
    }

    getCategories()

  }, []);


  useEffect(() => {

    const changeHandler = async () => {
      try {
        if (categorytyped) {
          const { data } = await axios.get(`https://fakestoreapi.com/products/category/${categorytyped}`)
          setProducts(data)
        }
        else {
          const { data } = await axios.get(`https://fakestoreapi.com/products`)
          setProducts(data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    changeHandler()
  }, [categorytyped]);

  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col">
          <Filter setCategorytyped={setCategorytyped} categories={categories} />
        </div>
      </div>

      <div className="row gy-3">
        {
          products ? products.map(item => {
            return (
              <ProductCard setFav={setFav} fav={fav} products={item} key={item.id} />
            )
          })
            : <Spinner />
        }
      </div>
    </div>
  )
}

export default Products