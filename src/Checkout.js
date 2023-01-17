import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img src="https://i.pinimg.com/originals/fd/2e/16/fd2e16de809e4727308251edf81a2831.png" alt="" className="checkout-ad" />
            <div>
                <h2 className="checkout-title">Your Shopping Basket</h2>
            </div>
        </div>
        <div className="checkout-right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout