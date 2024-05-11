import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../Spinner/Spinner';


const Filter = ({setCategorytyped, categories, changeHandler }) => {


  return (
    <div>

      <select onChange={(e)=>setCategorytyped(e.target.value)} name="category" id="">
        <option value="">All</option>
        {categories ? categories.map((category,index) => {
          return(
            <option key={index} value={category}>{category}</option>
          )
        })
          : <Spinner />}
      </select>


    </div>
  )
}

export default Filter