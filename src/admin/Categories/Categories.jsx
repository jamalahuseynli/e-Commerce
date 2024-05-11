import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner/Spinner';
import { CiEdit, CiTrash } from "react-icons/ci";


const Categories = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products/categories')
                setCategories(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        getCategories()
    }, []);
    return (
        <div className='categories'>
            <h1>ALL CATEGORIES</h1>
            {categories ? <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {categories.map((category, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{category}</td>
                                <td className='actions'>
                                    <button className='btn btn-warning'>
                                        <CiEdit/>
                                    </button>
                                    <button className='btn btn-danger'>
                                        <CiTrash/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
                : <Spinner />}
        </div>
    )
}

export default Categories