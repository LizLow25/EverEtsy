import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItemsThunk, fetchCartItemsThunk, increaseCartItemThunk, reduceCartItemThunk } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()

  useEffect(() => {
    setCount(item.count);
    dispatch(fetchCartItemsThunk())
  }, [dispatch, item.count]);

  const id = item.id

  const removeFromCart= () => {
    dispatch(deleteCartItemsThunk(id))

  }
  const incrementClick = () => {
    dispatch(increaseCartItemThunk(id))
  }

  const reduceClick = () => {
    if (count === 1) dispatch(deleteCartItemsThunk(id))
    dispatch(reduceCartItemThunk(id))

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
          onClick = {reduceClick}
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
