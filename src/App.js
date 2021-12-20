import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Payment from './Payment.js';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';

export default function App(){
  const[{user}, dispatch] = useStateValue();
  
  useEffect(()=>{
   
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is',authUser);
      if(authUser){
        //if user is null, login the current user
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //if user is loged in , log out the user
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path = "/orders"
            element ={[<Header/>,<Orders/>]}/>
          <Route
            path = "/login"
            element ={<Login/>}/>
          <Route 
            path = "/checkout"
            element={[<Header/>,<Checkout/>]}/>
          <Route
            path = "/payment"
            element= {[<Header/>,<Payment/>]}/>
          <Route 
            path = "/"
            element={[<Header/>,<Home/>]}/>
        </Routes>
      </div>
    </Router>
  );
}
