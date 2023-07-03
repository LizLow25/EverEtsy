import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { fetchCartItemsThunk } from '../../store/cart';
import { getAllProductsThunk } from '../../store/product';
import './Cart.css'


function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products.allProducts)



  useEffect(() => {
    dispatch(fetchCartItemsThunk())
    dispatch(getAllProductsThunk())
  }, [dispatch])

  console.log('cart', cart)

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...products[item.id]
      };
    });

  console.log('cartItems', cartItems)

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   window.alert(
  //     "Purchased the following:\n" +
  //     `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
  //   );
  // }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>

      <button >Purchase</button>
    </div>
  )
}

export default Cart;
