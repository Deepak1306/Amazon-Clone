import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
function Navbar() {
   const [{basket}]=useStateValue();
  return (
    <nav className="heading">
    {/* Logo */}
    <Link to="/">
    <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
    </Link>
      

    {/* Search box */}
    <div className="searchbox">
    <input type="text" className="search" />
    <SearchIcon className="icons"/>
    </div>
{/*Language  */}
<div className="flag">
  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png" alt="" className="ind" />
</div>
    {/* sign in */}
    <div className="sign">
      <Link className="link" to="/login">
      <span class="hel">Hello</span>
      <span class="sig"><b>Sign In</b></span>
      </Link>
    </div>

    

    {/* orders */}
    <div className="sign">
      <Link className="link">
      <span class="hel">Returns</span>
      <span class="sig"> <b>&Orders</b></span>
      </Link>
    </div>

    {/* prime */}
    <div className="sign">
      <Link className="link" to="/prime" >
      <span class="hel">Your</span>
      <span class="sig"> <b>Prime</b></span>
      </Link>
    </div>

    {/* cart */}
    <div className="car">
      <Link className="lin" to="/checkout">
      <ShoppingCartIcon className="cart"/><span class="items">{basket?.length}</span>
      <p class="sig"> <b>Cart</b></p>
      </Link>
    </div>


    </nav>
  )
}

export default Navbar
