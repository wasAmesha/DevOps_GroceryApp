import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import { useAuth } from '../../Hooks/useAuth';


export default function Header() {
    const { user, logout } = useAuth();

    const { cart } = useCart();
  
  
    return (
      <header className={classes.header}>
        <div className={classes.container}>
          <Link to="/" className={classes.logo}>
           FreshCart
          </Link>
          <div className={classes.navbar}>
          <Link to="/home">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </div>
        
          <nav>
            <ul>
                
              {user ? (
                <li className={classes.menu_container}>
                  <Link to="/profile">{user.name}</Link>
                  <div className={classes.menu}>
                    <Link to="/profile">Profile</Link>
                    <Link to="/orders">Orders</Link>
                    <Link onClick={logout}>Logout</Link>
                  </div>
                </li>
              ) : (
                <Link to="/login">Login</Link>
              )}
  
              <li>
                <Link to="/cart">
                  Cart
                  {cart.totalCount > 0 && (
                    <span className={classes.cart_count}>{cart.totalCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );



}