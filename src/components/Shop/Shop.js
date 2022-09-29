import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect( () => {
        fetch('workouts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product.time]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                <div className="shop-logo">
                    <img src={logo} alt="" />
                    <h5>Prussian Fitness</h5>
                </div>

                <div className='products'>
                    {
                        products.map(product => <Product 
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

            </div>
            <div className="cart-container">
                    <Cart 
                    cart={cart}
                    ></Cart>
            </div>
        </div>
    );
};

export default Shop;