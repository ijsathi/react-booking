import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <NavLink to='/' style={{color:"inherit", textDecoration:"none"}}><span className="logo">Isratbooking</span></NavLink>
                <div className="navItems">
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;