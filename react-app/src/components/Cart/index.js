import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { fetchCartItemsThunk } from '../../store/cart';
import { getAllProductsThunk } from '../../store/product';
import './Cart.css'
import PurchaseCartModal from '../PurchaseCartModal';
import OpenModalButton from "../OpenModalButton";


function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products.allProducts)



  useEffect(() => {
    dispatch(fetchCartItemsThunk())
    dispatch(getAllProductsThunk())
  }, [dispatch])

  // console.log('cart', cart)

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...products[item.id]
      };
    });

  console.log('cartItems', cartItems)

  const prices = cartItems.map(item => item.price)
  // console.log('prices', prices)

  let total = 0
  let cartTotal = cartItems.map(item => total += (item.count * item.price))
  console.log('total', total)
  let tax = (total * (.0725))
  let taxtotal = total + tax

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );



  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </ul>

      <div className='cartcheckout'>How you'll pay
        <form className="purchaseform">
          <div className="radio">
            <label>
              <input type="radio" name='card' />
              <i class="fa-brands fa-cc-mastercard fa-2xl"></i>
            </label>
          </div>
          <div className="radio" >
            <label>
              <input type="radio" name='card' />
              <i class="fa-brands fa-cc-amex fa-2xl"></i>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name='card' />
              <i class="fa-brands fa-cc-visa fa-2xl"></i>
            </label>
          </div>
        </form>
        <div className='checkoutmenu'>
          <div>Item(s) total</div> <div>${total.toFixed(2)}</div></div>
        <div className='checkoutmenu'><div>Tax (7.25%) </div> <div>${tax.toFixed(2)}</div></div>
        <div className='checkoutmenu'><div>Total</div> <div>${taxtotal.toFixed(2)}</div></div >

          <OpenModalButton
            buttonText="Purchase"
            modalComponent={<PurchaseCartModal cartItems={cartItems} />} />
        </div>


      </div>
 
      )
}

      export default Cart;
