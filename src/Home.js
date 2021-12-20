import React from 'react'
import './Home.css';
import Product from './Product.js';
function Home() {
    return (
        <div className = 'home'>
            <div className="homeContainer">
                <img 
                    src="https://m.media-amazon.com/images/I/61UG3v68KOL._SX3000_.jpg" 
                    alt="Home image" 
                    className="homeImage" />
            </div>

            <div className="homeRow">
                <Product
                    id = "1"
                    title = "EPOMAKER SKYLOONG SK61 61 Keys 60% Hot Swappable Programmable Mechanical Gaming Wired Keyboard with RGB Backlit, NKRO, Water-Resistant, Type-C Cable for Win/Mac/Gaming (Gateron Optical Yellow, Panda)"
                    image = "https://m.media-amazon.com/images/I/51tRCbU8dOL._AC_SL1000_.jpg"
                    price = {88}
                    rating = {3}
                />
                <Product
                    id = "2"
                    title = "Samsung Electronics Galaxy Buds Live, True Wireless Earbuds W/Active Noise Cancelling (Wireless Charging Case Included), Mystic Red (US Version)"
                    image = "https://m.media-amazon.com/images/I/71qsNVFefKL._AC_UL320_.jpg"
                    price = {90}
                    rating = {4}
                />
            </div>

            <div className="homeRow">
                <Product
                    id = "3"
                    title = "Samsung Electronics Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection Bluetooth US Version, Green"
                    image = "https://m.media-amazon.com/images/I/61T0N58UJiS._AC_SL1500_.jpg"
                    price = {205}
                    rating = {4}
                />
                <Product
                    id = "4"
                    title = "Samsung Electronics Galaxy Chromebook Go Laptop Computer Lightweight Slim Durable Design 12-Hour Battery Wi-Fi 6 Share Files with Phone, Black,Silver,32GB"
                    image = "https://m.media-amazon.com/images/I/815zitaLEvS._AC_SL1500_.jpg"
                    price = {290}
                    rating = {3}
                />
                <Product
                    id = "5"
                    title = "Bose Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, Black"
                    image = "https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_SL1500_.jpg"
                    price = {350}
                    rating = {4}
                />
            </div>

            <div className="homeRow">
                <Product
                    id = "6"
                    title = "SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black"
                    image = "https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"
                    price = {610}
                    rating = {4}
                />
                
            </div>
        </div>
        
    )
}

export default Home
