import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const singleShop = useSelector(state => state.shops.singleShop)
	console.log(sessionUser, sessionUser?.shop)

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
				/>

			</div>
			{sessionUser ? sessionUser.id === singleShop?.shop_owner ? <div><NavLink exact to={`/shops/${singleShop.id}`}> <i className="fa-solid fa-store fa-xl"></i></NavLink></div> : <div><NavLink exact to='/shops/new'> <i class="fas fa-store fa-xl"></i></NavLink></div> : null}

			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}
			<div><i class="fa-solid fa-cart-shopping fa-xl"></i></div>
		</div>
	);
}

export default Navigation;
