import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating}) {
   const [,dispatch]=useStateValue();
   
    const addToBasket=()=>{
        // Add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price
            }
        });
   }


  return (
    
    <div className="product">
            <div className="info">
              <p>{title}</p>
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
        </div>
        <img className="img" src={image} alt=""/>
        <button className="btn" onClick={addToBasket}><b>Add to Basket</b></button>


           
    </div>
      
  )
}

export default Product
