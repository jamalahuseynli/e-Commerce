import React from 'react'
import  PropagateLoader  from "react-spinners/PropagateLoader";

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <PropagateLoader color="#0DCB9B"/>
    </div>
  )
}

export default Spinner;