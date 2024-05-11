import React from 'react'

const Search = () => {
    return (
        <div className='form'>
            <div className="radio-cont">
                <label htmlFor="">Gender:</label>
                <input type="radio" name="radio1" id="" />men
                <input type="radio" name="radio1" id="" />women
                <input type="radio" name="radio1" id="" />kids
            </div>
            

            <button type="submit">Filter</button>
        </div>
    )
}

export default Search