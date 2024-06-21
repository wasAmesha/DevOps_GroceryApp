import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';


function FooterNew() {

  
  return (
    <div className='footerContainer'>
      <div class='footerLinks'>
        <div className='footerLinkWrapper'>
          <div class='footerLinkItems'>
            <h2>Quick Links</h2>
            <Link to='/'>  Home </Link>
            <Link to='/categories'> Categories </Link>
            <Link to='/orders'>  Orders </Link>
            <Link to='/about'>  About </Link>
            <Link to='/contact'> Contact </Link>
          </div>
          <div class='footerLinkItems'>
            <h2>Extra Links</h2>
            <Link to='/cart'> Cart</Link>
            <Link to='/login'>  Login</Link>
            <Link to='/register'>  Register</Link>
            
          </div>
        </div>
        <div className='footerLinkWrapper'>
          <div class='footerLinkItems'>
            <h2>Follow Us</h2>
            <Link to='/'> Instagram </Link>
            <Link to='/'>  Facebook </Link>
            <Link to='/'>  LinkedIn </Link>
            <Link to='/'>  Twitter</Link>
          </div>
          <div class='footerLinkItems'>
            <h2>Contact Us</h2>
            <Link to='/'>  freshcart@gmail.com </Link>
            <Link to='/'>  +94914526387 </Link>
          </div>
        </div>
      </div>
          
      <div className='footerLine'>
        <div class='websiteRights'> © 2023 freshcart.com </div>
      </div>
    </div>
  );
}

export default FooterNew;