import React, { Component } from 'react';
import "./Header.css"

import logo from "./Logo.svg"
import basket from "./basket.svg"

class Header extends Component {
    render() {
        return (
            <div id='header'>
                <img className='logo' src={logo} alt="" />

                <ul className='menu'>
                    <li className='menu-item'>Home</li>
                    <li className='menu-item'>Shop</li>
                    <li className='menu-item'>About Us</li>
                    <li className='menu-item'>Help</li>
                </ul>

                <img id='basket' src={basket} alt="" />
            </div>
        );
    }
}

export default Header;
