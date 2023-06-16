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
		<ul>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			{ sessionUser ? sessionUser.id === singleShop?.shop_owner ? <li><NavLink exact to={`/shops/${singleShop.id}`}> <i class="fas fa-store"></i></NavLink></li> : <li><NavLink exact to='/shops/new'> <i class="fas fa-store"></i></NavLink></li> : null }
		</ul>
	);
}

export default Navigation;
