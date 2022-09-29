import React from 'react';
import './Prodcut.css'

const Product = (props) => {
    const {handleAddToCart} = props
    const {img, name, description, age, ageLimit, time} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>{description}</p>
                <p>For Age: {age} - {ageLimit}</p>
                <p>Time required: <span>{time}</span>s</p>
            </div>

            <div className='btn-container'>
                <button onClick={ () => handleAddToCart(props.product)} className='btn-cart'>
                    Add to list
                </button>
            </div>
        </div>
    );
};

export default Product;