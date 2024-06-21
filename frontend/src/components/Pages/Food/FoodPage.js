import React, { useEffect, useState } from 'react';
import classes from './foodPage.module.css'
import { getById } from '../../../Services/foodService';
import { useNavigate, useParams } from 'react-router';
import Price from '../../Price/Price';
import { useCart } from '../../../Hooks/useCart';


export default function FoodPage() {
    const [food, setFood] = useState({});
    const { id} = useParams();
    const {addToCart} =useCart();
    const navigate = useNavigate();

    const handleAddToCart = () => {
    addToCart(food);
    navigate('/cart');
  };
    

  
    useEffect(() => {
      getById(id).then(setFood);
    }, [id]);


  return (
    <>
    {food && (
      <div className={classes.container}>
      
         <img
            className={classes.image}
            src={`${food.imageUrl}`}
            alt={food.name}/>
         
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              </div>
              <div className={classes.price}>
              <Price price={food.price} />
              <span> ({food.quantity}) </span>
            </div>
          
            <button onClick={handleAddToCart}>Add To Cart</button>
              </div>
    </div>
    )
    
  }
  </>

  );
}

