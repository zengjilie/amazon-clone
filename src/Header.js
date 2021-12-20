import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className = 'header'>
            <Link to="/">
                <img 
                    className = 'headerLogo'
                    src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt = 'Amazon logo'
                />
            
            </Link>

            <div className = 'headerSearch'>
                <input 
                    className = 'headerSearchInput'
                    type = 'text'/>
                <SearchIcon 
                    className = 'headerSearchIcon'/>
            </div>

            <div className = 'headerNav'>
                <Link to={!user && "/login"}>
                    <div onClick = {handleAuthentication}className = 'headerOption'>
                        <span className = 'headerOptionLineOne' >Hello</span>
                        <span className = 'headerOptionLineTwo' >{user?'Sign Out':'Log in'}</span>
                    </div>
                </Link>
                <Link to={'/orders'}>
                    <div className = 'headerOption'>
                        <span className = 'headerOptionLineOne' >Returns</span>
                        <span className = 'headerOptionLineTwo' >Orders</span>
                    </div>
                </Link>
               
                <div className = 'headerOption'>
                    <span className = 'headerOptionLineOne' >Your</span>
                    <span className = 'headerOptionLineTwo' >Prime</span>
                </div>
                
            </div>
            <Link to="/checkout">
                <div className = 'headerOptionBasket'>
                    <ShoppingBasketIcon 
                        className = 'headerBasketIcon'
                    />
                    <span className = 'headerOptionLineTwo headerBasketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
