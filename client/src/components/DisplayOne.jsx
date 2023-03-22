import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DisplayOne = () => {
    // * param for url to single product
    const { id } = useParams();

    const navigate = useNavigate();

    // * state
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
                console.log(product)
            })
            .catch(err => console.log(err))
    }, [])

    // * delete functionality
    const deleteOneHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="mt-3 card p-4 mx-auto">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <div><Link className="btn btn-primary me-3" to={`/edit/${product._id}`}>Edit</Link><button className="btn btn-danger" onClick={(e) => deleteOneHandler(product._id)}>Delete</button></div>
            </div>
        </>
    )
}

export default DisplayOne;