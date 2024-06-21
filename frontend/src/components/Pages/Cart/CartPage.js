import React from 'react'
import classes from './cartPage.module.css';
import { useCart } from '../../../Hooks/useCart';
import Title from '../../Title/Title';
import { Link } from 'react-router-dom';
import Price from '../../Price/Price';
import NotFound from '../../NotFound/NotFound';

export default function CartPage() {
  const { cart ,removeFromCart,changeQuantity} = useCart();
  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />
      {cart.items.length === 0 ? (
        <NotFound message="Cart Page Is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.food.id}>
                <div>
                  <img
                    src={`${item.food.imageUrl}`}
                    alt={item.food.name}
                  />
                </div>

                <div>
                  <Link to={`/food/${item.food.name}`}>{item.food.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                  >
                    <option>100</option>
                    <option>200</option>
                    <option>500</option>
                    <option>1000</option>
                    <option>2000</option>
                    <option>3000</option>
                    <option>4000</option>
                    <option>5000</option>
                    
                  </select>
                  </div>

                  <div>
                    <Price price={item.price}/>
                  </div>

                  <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.food.id)}>Remove</button>
                  </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
           <div>
            <div className={classes.foods_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />  
              </div>
            </div>

            <Link to="/checkout">Proceed To Checkout</Link>
            </div>
        </div>
      )}
    </>
  );
}