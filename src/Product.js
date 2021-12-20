import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';


function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    function addToBasket(){
        dispatch(
            {
                type:"ADD_TO_BASKET",
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating
                }
            }
        )
    }

    return (
        <div className = "product">
            <div className="productInfo">
                <div className = "productTitle">{title}</div>
                <div className = "productPrice">
                    <small>$</small>
                    <strong >{price}</strong>
                </div >
                <div className="productRating">
                    {Array(rating).fill().map((_,i)=>{
                        return <div key = {i}>⭐️</div>
                    })}
                </div>
            </div>
            
            <img 
                className="productImage"
                src= {image}
                alt="Product Image" />
            <button 
                onClick = {addToBasket} 
                className = "productButton">Add to Basket
            </button>

        </div>
    )
}

export default Product
