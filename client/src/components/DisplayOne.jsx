import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {
    // * param for url to single product
    const { id } = useParams();

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

    return (
        <>
            <div className="mt-3 card p-4 mx-auto">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <p>{product.description}</p>
            </div>
        </>
    )
}

export default DisplayOne;