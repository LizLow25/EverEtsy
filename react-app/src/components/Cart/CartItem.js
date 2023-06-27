import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateCart, removeItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const id = item.id

  const removeFromCart= () => {
    dispatch(removeItem(id))

  }
  const incrementClick = () => {
    dispatch(populateCart(id))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick = {incrementClick}
        >
          +
        </button>
        <button
          className="cart-item-button"

        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={removeFromCart}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
