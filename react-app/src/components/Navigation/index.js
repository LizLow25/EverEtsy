import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { fetchCartItemsThunk } from '../../store/cart';
import { searchProductThunk } from '../../store/product';

function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
	const cart = useSelector(state => state.cart)
	const [search, setSearch] = useState('')

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
					placeholder='Search for anything'
					onChange={async (e) => {
						setSearch(e.target.value)
					}}
					onKeyDown={async (e) => {
						if (e.key === 'Enter') {
							await dispatch(searchProductThunk(search))
							history.push("/products/search")
						}
					}}

				/>
				<button className='search-button'
					onClick={async (e) => {
						await dispatch(searchProductThunk(search))
						history.push("/products/search")
					}}><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>

			</div>
			{sessionUser ? <div ><NavLink exact to={'/shops/manage'}> <i title={'Shop Manager'} className="fa-solid fa-store fa-xl"></i></NavLink></div> : null}

			{isLoaded && (
				<div >
					<ProfileButton user={sessionUser} />
				</div>
			)}
			{/* {sessionUser ? <div className='circleAmount'>{cartAmount}</div> : ''} */}
			{sessionUser ? <div className='carticonparent'><NavLink exact to={'/cart'}>  <i class="fa-solid fa-cart-shopping fa-xl"><div className='circleAmount'>{cartAmount}</div></i></NavLink></div> : null}

		</div>


	);
}

export default Navigation;
