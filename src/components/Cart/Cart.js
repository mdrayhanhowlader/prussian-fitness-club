import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../images/profile.jpg';
import './Cart.css';

toast.configure()

const Cart = (props) => {
    const { cart } = props
    let total = 0
    for(const product of cart){
        total = total + product
    }

    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        const getSeconds = localStorage.getItem("seconds")
        setSeconds(getSeconds)
    },[])

    const handler = num => {
        setSeconds(num)
        localStorage.setItem("seconds", JSON.stringify(num))
    }

    const handlerToast = () => {
        toast("Your Activities has Done!!!")
    }

    return (
        <div>
            <div className='profile'>

                <div className="profile-avatar">
                    <img src={img} alt="" />
                </div>
                <div className='profile-info'>
                    <h4>Rayhan Howlader</h4>
                    <small>Dhaka, Bangladesh</small>
                </div>

            </div>
            <div className='profile-details'>
                        
                <div>
                    <h4>75<small>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>65</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25<small>Yrs</small></h4>
                    <p>Years</p>
                </div>
    
            </div>

            <div className="break-container">
                <h4>Take A Break</h4>
                <div className="breaks">

                    <div className='break'>
                        <p onClick={() => handler(10)}>10s</p>
                    </div>
                    <div className='break'>
                        <p onClick={() => handler(20)}>20s</p>
                    </div>
                    <div className='break'>
                        <p onClick={() => handler(30)}>30s</p>
                    </div>
                    <div className='break'>
                        <p onClick={() => handler(40)}>40s</p>
                    </div>
                    <div className='break'>
                        <p onClick={() => handler(50)}>50s</p>
                    </div>

                </div>
            </div>
            <div className='exercise-container'>
                <h2>Exercise Details</h2>
                <div className="exercise-time">
                    <p>Exercise Time</p>
                    <p className='seconds'>{total} seconds</p>
                </div>
                <div className="break-time">
                    <p>Break Time</p>
                    <p className='seconds'>{seconds} Seconds</p>
                </div>
            </div>
            <button onClick={handlerToast}  className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;