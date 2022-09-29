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
        <div>
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

            <div className='answer-container'>

                <div className='single-answer'>
                    <h2>How Does React Works?</h2>
                    <p>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook
                    </p>
                </div>

                <div className='single-answer'>
                    <h2>How Many Differences Between Props and State?</h2>
                    <p>
                        There are about 3 Differences between props and start. <br />
                        <strong>Props: 1- </strong> 
                        It is Immutable (cannot be modified).
                        <br />
                        <strong>2- </strong>
                        Props can be used with state and functional components
                        <br />
                        <strong>3- </strong>
                        Props are read-only. <br />

                        <strong>State: 1- </strong>
                        It is Mutable (can be modified).
                        <br />
                        <strong>2- </strong>
                        State can be used only with the state components/class component (Before 16.0).
                        <br />
                        <strong>3- </strong>
                        State is both read and write.
                    </p>
                </div>

                <div className='single-answer'>
                    <h2>How Many Ways Uses useEffect without loading data from Api?</h2>
                    <p>
                        <strong>I think of 4 possible ways to call the method: </strong> 
                        <strong>1: </strong> once, when component mounts. <br />
                        <strong>2: </strong> on every component render. <br />
                        <strong>3: </strong> on every component render with a condition. <br />
                        <strong>4: </strong> when component unmounts. <br />

                    </p>
                </div>

            </div>
        </div>
    );
};

export default Shop;