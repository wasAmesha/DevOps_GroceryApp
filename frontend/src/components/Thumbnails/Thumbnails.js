import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';




export default function Thumbnails({ foods }) {
  
  return ( 
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />
              <div className={classes.name}>{food.name}</div>
              <div className={classes.price}>
              <Price price={food.price} />
              <span> ({food.quantity}) </span>
            </div>
              
          </Link>
        </li>
      ))}
    </ul> 
  );
}
