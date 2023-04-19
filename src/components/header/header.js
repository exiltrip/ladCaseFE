import React from 'react';
import './header.sass'
import logo from '../../accets/lad-logo.png'
import userLogo from '../../accets/user-logo.svg'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <NavLink className="header-logo" to="/"> <img className="header-logo" src={logo} alt=""/></NavLink>
            <div className="header-find-container">
            <input className="header-find" placeholder="Search..."/>
                <button className="header-find-button">Find</button>
            </div>
            {props.isLoggedIn
                ? <NavLink className="header-lk-container" to="/lk">
                <img src={userLogo} alt="" className="user-logo"/>
                <span className="user-name">UserName</span>
                </NavLink>
                : <div><NavLink className="user-lk-link" to="signin">Sign in</NavLink> / <NavLink to="login" className="user-lk-link">Log in</NavLink></div>}

        </header>
    );
};

export default Header;