import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    return (
        
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} alt="Checkout Product" />
            <div className='checkoutProductInfo'>
                <div className='checkoutProduceTitle'>{title}</div>
                <div className='checkoutProductPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className='checkoutProductRating'>
                    {Array(rating).fill().map((_,i)=><div key = {i}>⭐️</div>)}
                </div>
                {!hideButton && (
                    < button onClick = {()=>dispatch({type:"REMOVE_FROM_BASKET",id:id})}>Remove from Basket</button>

                )}
                
            </div>
            
        </div>
    )
}

export default CheckoutProduct
