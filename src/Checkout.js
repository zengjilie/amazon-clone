import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import { ListItem } from '@mui/material';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img 
                    className="checkoutAd"
                    src="https://m.media-amazon.com/images/S/abs-image-upload-na/0/AmazonStores/ATVPDKIKX0DER/5feb73bc56d7c3296367b466b9167abc.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.png" 
                    alt="Ad image"/>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkoutTitle">
                    Your shopping Basket
                </h2>
                {basket.map((item,i) => 
                    <CheckoutProduct
                        key = {i}
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    /> 
                )}
                
            </div>

            <div className="checkoutRight">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
