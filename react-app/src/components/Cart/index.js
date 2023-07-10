import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { fetchCartItemsThunk } from '../../store/cart';
import { getAllProductsThunk } from '../../store/product';
import './Cart.css'
import PurchaseCartModal from '../PurchaseCartModal';
import OpenModalButton from "../OpenModalButton";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


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
    <div className="emptycart">
      <div className='purchaseprotect'><i class="fa-solid fa-hand-holding-heart fa-xl"></i> &nbsp;&nbsp;EverEtsy Purchase Protection: Shop confidently on EverEtsy knowing if something goes wrong with an order, we've got your back.</div>
      <h1 className='emptycarttitle'>Your cart is empty.</h1>
      <NavLink to='/' className='navcart'> <h2 className='emptycarttitle navcart'>Discover something unique to fill it up</h2></NavLink>
    </div>
  );



  return (
    <div className='cartContainer'>
      <div className='purchaseprotect cartprotect'><i class="fa-solid fa-hand-holding-heart fa-xl"></i> &nbsp;&nbsp;EverEtsy Purchase Protection: Shop confidently on EverEtsy knowing if something goes wrong with an order, we've got your back.</div>

      <div className="cart">
        <ul>
          {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        </ul>

        <div className='cartcheckout'>
          <h3>How you'll pay</h3>
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
            buttonText="Proceed to checkout"
            modalComponent={<PurchaseCartModal cartItems={cartItems} />} />
        </div>


      </div>
    </div>
  )
}

export default Cart;
