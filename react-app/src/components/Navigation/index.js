import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { fetchCartItemsThunk } from '../../store/cart';

function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
	const cart = useSelector(state => state.cart)

	//calculate the number of items in the cart
	let cartItems = Object.values(cart)
	let cartAmount = 0

	if (cartItems.length) {
		for (let item in cartItems) {
			cartAmount += cartItems[item].count



		}
	}

	useEffect(() => {
        dispatch(fetchCartItemsThunk())

    }, [dispatch])



	return (
		<div className='navbarcontainer'>
			<div>
				<NavLink className='everetsy' exact to="/">EverEtsy</NavLink>
			</div>
			<div className='search-bar-container'>
				<input
					type='search'
					className='search-bar'
					placeholder='Search coming soon...'
				/>

			</div>
			{sessionUser ? <div ><NavLink exact to={'/shops/manage'}> <i title={'Shop Manager'} className="fa-solid fa-store fa-xl"></i></NavLink></div> : null}

			{isLoaded && (
				<div >
					<ProfileButton user={sessionUser} />
				</div>
			)}
			{sessionUser ? <div>{cartAmount}</div> : ''}
			{sessionUser ? <div ><NavLink exact to={'/cart'}> <i class="fa-solid fa-cart-shopping fa-xl"></i></NavLink></div> : null}

		</div>


	);
}

export default Navigation;
