import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
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
			{ sessionUser ? sessionUser.shop.length ? <li><NavLink exact to={`/shops/${sessionUser.shop[0].id}`}> <i class="fas fa-store"></i></NavLink></li> : <li><NavLink exact to='/shops/new'> <i class="fas fa-store"></i></NavLink></li> : null }
		</ul>
	);
}

export default Navigation;
