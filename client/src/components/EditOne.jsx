import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditOne = () => {
    // * param for url to single product edit page
    const { id } = useParams();

    // * state
    const [product, setProduct] = useState({});

        // * getting the data for the item
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();

    // * form event handlers & functions
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // if (formValidator()) {
            axios.patch(`http://localhost:8000/api/product/${id}`, product)
                .then(res => {
                    navigate(`/${product._id}`)
                })
                .catch(err => console.log(err))
        // }
    }

    return (
        <div className='card p-4'>
            <h1>Update Product</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    {/* {errors.title ? <p className='text-danger'>{errors.title}</p> : ''} */}
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={product.title} id="title" name='title' onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    {/* {errors.price ? <p className='text-danger'>{errors.price}</p> : ''} */}
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" value={product.price} id="price" name='price' onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    {/* {errors.description ? <p className='text-danger'>{errors.description}</p> : ''} */}
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={product.description} rows="3" name='description' onChange={onChangeHandler}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditOne;