import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { logout, login } from "../../store/session";

import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './ProfileButton.css'
import { fetchCartItemsThunk, refreshCart } from "../../store/cart";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(refreshCart())
    setShowMenu(false);
    history.push('/')
  };

  const loginDemo = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io'
    const password = 'password'
    const data = await dispatch(login(email, password));
    dispatch(fetchCartItemsThunk())
    setShowMenu(false);
  };


  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button className='profileButton' onClick={openMenu}>
        <i class="fa-regular fa-user fa-xl"></i>
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="loggedindropdown">
            <div className="profile-dropdown-items">Hello, {user.username}</div>
            <NavLink to='/reviews'><div className="profilereview"><i class="fa-regular fa-clipboard"></i> Manage your reviews</div></NavLink>
            <div>
              <button className='logoutbutton' onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i> Sign out</button>
            </div>
          </div>
        ) : (
          <div className="profileButtons">
            <OpenModalButton
              className='p-button'
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              className='p-button'
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            <button className='p-button' onClick={loginDemo}>Log In as Demo User</button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
