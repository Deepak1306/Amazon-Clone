import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
  return (
    <div className="ban">
      <img className="banner" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" alt="" />
       <div className="pro">
        <Product
       id="122121"
       title="The Lean StartUp: How Constant Innovation Creates Radically Successful Bussinesses Paperback"
       price={329}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
       />
       <Product
       id="122122"
       title="Havells Klassic 750 watts 3 Jar Mixer Grinder with 304 SS Blades, Large Size SS Jars, Break Resistant Polycarbonate Transparent Jar Lids With Twist & Lock Mechanism"
       price={3149}
       rating={4}
       image="https://m.media-amazon.com/images/I/7161CX7H8JL._SX679_.jpg"
       />
       </div>
       <div className="pro">
       <Product
       id="122123"
       title="boAt Rockerz 370 Bluetooth Wireless On Ear Headphone with Mic (Buoyant Black)"
       price={1199}
       rating={4}
       image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg"
       />
       <Product
       id="122124"
       title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey"
       price={289909}
       rating={5}
       image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
       />
       <Product
       id="122125"
       title="GRITSTONES Men's Cotton Blend Full Sleeve Shirt | Stylish Printed Casual Wear Shirt for Mens"
       price={399}
       rating={3}
       image="https://m.media-amazon.com/images/I/61YQ-jKQmOL._UL1440_.jpg"
       />
       </div>
       <div className="pro1">
       <Product
       id="122126"
       title="Apple iPhone 13 Pro Max (128GB) - Sierra Blue"
       price={129999}
       rating={5}
       image="https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg"
       />  
       </div>

       


    </div>
  )
}

export default Home
