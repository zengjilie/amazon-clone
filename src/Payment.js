import React,{useState,useEffect} from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link, useNavigate} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from './axios';
import CurrencyFormat from 'react-currency-format';
import { getSubtotal } from './reducer';
import CheckoutForm from './CheckoutForm'

const promise = loadStripe('pk_test_51K71k7CFLz6rYIeXYyxZKA4zeyIcPnxleKqdlJXbkPtKTYda3jt8tj1FZgLeVygCj8SBW1HJoOC8DbdsMO3MmAXK00gQ2kE3Vy');

export default function Payment() {
    const navigate = useNavigate();
    const [{basket,user},dispatch] = useStateValue();
   
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        //request clientSecret from backend
        const getClientSecret = async ()=>{
            const total = getSubtotal(basket) * 100;

            const response = await axios({
                method:'post',
                url:`/payments/create?total=${total}`
            }).then(res => setClientSecret(res.data.clientSecret))
                
            } 
            getClientSecret();
    },[basket])
  
    const appearance = {
      theme: 'stripe',
    };
    
    const options = {
      clientSecret,
      appearance,
    };

    return (
        <div className='payment'>
           <div className="paymentContainer">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)   
                </h1> 

                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery Address</h3>   
                    </div> 
                    <div className="paymentAddress">
                        <div>{user?.email}</div>
                        <div>7205 Hart Ln, Apt !!!!</div>
                        <div>Austin, TX</div>
                    </div>
                </div>
                
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="paymentItems">
                        {basket.map((item,index)=>
                            <CheckoutProduct
                                key ={index}
                                id ={ item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}/>
                        )}
                    </div>
                </div>
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Payment Method</h3>
                    </div> 
                    <div className="paymentDetails">
                        <CurrencyFormat
                            renderText={(value)=>(
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getSubtotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        {clientSecret &&(
                            <Elements options={options} stripe={promise}>
                                <CheckoutForm/>
                            </Elements>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    )
}

