import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
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
			{sessionUser ? <div><NavLink exact to={'/shops/manage'}> <i className="fa-solid fa-store fa-xl"></i></NavLink></div> : null}

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
