import React from 'react';
import classes from './thumbnails.module.css';
import { Link } from 'react-router-dom';



export default function Thumbnails({ foods }) {
  return ( 
    <ul className={classes.list}>
      {foods.map(food => (
        <li key={food.id}>
          <Link to={`/food/${food.name}`}>
            <img
              className={classes.image}
              src={`${food.imageUrl}`}
              alt={food.name}
            />
              <div className={classes.name}>{food.name}</div>
              
              
          </Link>
        </li>
      ))}
    </ul> 
  );
}
