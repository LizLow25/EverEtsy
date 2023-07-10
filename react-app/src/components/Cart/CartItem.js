import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteCartItemsThunk, fetchCartItemsThunk, increaseCartItemThunk, reduceCartItemThunk } from '../../store/cart';
import './Cart.css'
import { getAllShopsThunk } from '../../store/shop';

function CartItem({ item }) {
  const history = useHistory()
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()
  const shops = useSelector(state => state.shops.allShops)

  const singleShop = shops[item?.shop_id]


  useEffect(() => {
    setCount(item.count);
    dispatch(fetchCartItemsThunk())
    dispatch(getAllShopsThunk())
  }, [dispatch, item.count]);

  const id = item.id

  const removeFromCart = () => {
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
      <div className='cartImageContainer'>
        <img className='cartImage' src={item.main_image} />
      </div>
      <div>
        <div className="cart-item-header">{item.name}</div>
        <div className='namesshops'>
          <p>from  </p>
          <div onClick={() => history.push(`/shops/${singleShop.id}`)} className='shopNameCart'>{singleShop?.name}</div>
        </div>

        <div className="cart-item-menu">

          <div className='countcontainer'>
            <div className='countnum'>{count}</div>
            <button
              className="cart-item-button-inc"
              onClick={incrementClick}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <button
              className="cart-item-button-inc"
              onClick={reduceClick}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <button
              className="remove-cart-item-button"
              onClick={removeFromCart}
            >
              <i class="fa-solid fa-xmark fa-xl"></i> Remove
            </button>
          </div>

        </div>
      </div>
      <div className='pricetotal'>${item.price?.toFixed(2)}</div>
    </li>
  );
}

export default CartItem;
