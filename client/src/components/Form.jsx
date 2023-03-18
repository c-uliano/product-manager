import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
    // * states
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    // * navigate
    const navigate = useNavigate();

    // * form event handlers & functions
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const formValidator = () => {
        let isValid = true;
        if (product.title.length < 3) {
            setErrors({
                title: "Title must be at least 3 characters"
            });
            isValid = false;
        } else if (product.price < 1) {
            setErrors({
                price: "Price must be greater than 1"
            });
            isValid = false;
        } else if (product.description.length < 3) {
            setErrors({
                description: "Description must be at least 10 characters long"
            });
        }
        return isValid;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.post('http://localhost:8000/api/product', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        navigate("/")
    }

    return (
        <div className='card p-4'>
            <h1>Add Product</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    {errors.title ? <p className='text-danger'>{errors.title}</p> : null}
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    {errors.price ? <p className='text-danger'>{errors.price}</p> : null}
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" name='price' onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                    {errors.description ? <p className='text-danger'>{errors.description}</p> : null}
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" name='description' onChange={onChangeHandler}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;