import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    // * states
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });
    const {list, setList} = props;

    // const [errors, setErrors] = useState({});

    // * form event handlers & functions
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    // const formValidator = () => {
    //     let isValid = true;
    //     if (product.title.length < 3) {
    //         setErrors({
    //             ...errors,
    //             title: "Title must be at least 3 characters"
    //         });
    //         isValid = false;
    //     } else if (product.price < 1) {
    //         setErrors({
    //             ...errors,
    //             price: "Price must be greater than 1"
    //         });
    //         isValid = false;
    //     } else if (product.description.length < 3) {
    //         setErrors({
    //             ...errors,
    //             description: "Description must be at least 10 characters long"
    //         });
    //     }
    //     return isValid;
    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // if (formValidator()) {
            axios.post('http://localhost:8000/api/product', product)
                .then(res => {
                    setList([...list, res.data])
                    setProduct({
                        title: "",
                        price: "",
                        description: ""
                    });
                })
                .catch(err => console.log(err))
        // }
    }

    return (
        <div className='card p-4'>
            <h1>Add Product</h1>
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

export default Form;