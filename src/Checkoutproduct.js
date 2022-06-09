
import React from 'react'
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider'
function Checkoutproduct({id, title, image, price, rating}) {
  const [,dispatch]=useStateValue();
  const removeFromBasket=()=>{
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
        });
  }
  
  return (
    <div className="cart1">
      <img src={image} alt="" className="cproduct" />
      <div className="productinfo">
      <div className="cartinfo">
              <p><h1>{title}</h1></p>
               <p>₹<strong>{price}</strong></p>
           
               <div className="rating">
              {
                  Array(rating)
                  .fill()
                  .map(()=>(
                    <p>⭐</p>
                   )
                  )
               }

            </div>
            <button className="btn1" onClick={removeFromBasket}><b>Remove From Basket</b></button>
        </div>
        


      </div>
     
    </div>
  )
}

export default Checkoutproduct
