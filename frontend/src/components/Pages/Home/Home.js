import React, { useEffect, useState } from 'react';
import classes from './home.module.css';
import { Link } from 'react-router-dom';
//import Search from "../../Search/Search";
import { useSpring, animated } from 'react-spring';



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
  });

  useEffect(() => {
    setIsVisible(true); // Trigger animation when component mounts
  }, []);

  return (
    <>
       <div className={classes.searchOverlay}>
       <animated.div style={animationProps}>
        <p>WELCOME TO FRESHCART</p>
      </animated.div>
         </div>

        <img src='/foods/Groceries.jpg' alt="logo" height='500' width='100%'></img>
        <h1><p className={classes.Home}>REACH FOR A HEALTHIER YOU  WITH               
        <span className={classes.new}> FRESH</span> AND <span className={classes.new}>ORGANIC</span> FOODS</p></h1>
        <h3><p className={classes.text}>"Experience vitality with our range of fresh, organic foods. Empower 
         your health journey and savor nature's best. Explore now!"</p></h3>
         <Link to="/categories">
         <h1><button type="button"className={classes.button} >Shop Now</button></h1>
         </Link>
         
  
    </>
  )
}
