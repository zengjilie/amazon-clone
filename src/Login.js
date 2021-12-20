import React,{useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    
    function signin(e){
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                navigate('/');
            }).catch(error => alert(error));
    }
        
    function register(e){
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                navigate('/');
            }).catch(error => alert(error));
    }

    return (
        <div className='login'>
                <Link to="/">
                <img 
                    className='loginLogo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG1.png" 
                    alt="Amazon logo" />
            </Link>
            <div className="loginContainer">
                <h1>Sign-in</h1>
                <form action="POST">
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value = {email} 
                        onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value = {password} 
                        onChange={e => setPassword(e.target.value)}/>
                    <button  
                        type='submit' 
                        onClick = {signin} 
                        className='loginSigninButton'>Login</button>
                </form>
                <p>
                    By signing-in you agree to Amazon clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button 
                    type='submit' 
                    onClick = {register} 
                    className='loginRegister'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
