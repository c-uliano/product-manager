import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    // * state
    const { list, setList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setList(res.data)
                console.log(list)
            })
            .catch(err => console.log(err))
    }, [])

    // * delete functionality
    const deleteOneHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                const filteredList = list.filter(player => player._id !== id)
                setList(filteredList)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>All Products</h2>
            {list.map((product) => {
                return (
                    <div key={product._id} className="mt-3 card p-4 mx-auto">
                        <h4><Link to={`/${product._id}`}>{product.title}</Link></h4>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <div><Link className="btn btn-primary me-3" to={`/edit/${product._id}`}>Edit</Link><button className="btn btn-danger" onClick={(e) => deleteOneHandler(product._id)}>Delete</button></div>
                    </div>
                )
            })}
        </>
    )
}

export default DisplayAll;