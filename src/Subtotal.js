import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import { getSubtotal } from './reducer'
import {useNavigate} from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <div>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </div>
                        <small className="subtotalGift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getSubtotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick = {()=>navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
