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

    return (
        <>
            <h2>All Products</h2>
            {list.map((product) => {
                return (
                    <div key={product._id} className="mt-3 card p-4 mx-auto">
                        <h4><Link to={`/${product._id}`}>{product.title}</Link></h4>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default DisplayAll;