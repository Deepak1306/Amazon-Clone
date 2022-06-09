import React from 'react';
import './Checkout.css';
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
  const [{basket}]=useStateValue();

  return (
    <div className="check">
        <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/MiniART/Monsooonsale/AFpage/Rec/Headers/image.png" alt="" className="add" />
      
      {basket?.length===0?(
        <div className="empty">
            <h2>Your Cart Is Empty</h2>
            <p>You Have No Items in your basket. To buy one or items, click "Add to basket" next to the item</p>
        </div>
      ):(
          <div>
              <h2>Your Shopping Cart</h2>
            {basket.map((item)=>(
                <Checkoutproduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
            ))}
              
          </div>
      )}
    

        </div>

        <div>
            <Subtotal/>
        </div>
      
    </div>
  )
}

export default Checkout
