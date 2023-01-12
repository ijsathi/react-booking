import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className="navContainer">
                <NavLink to='/' style={{color:"inherit", textDecoration:"none"}}><span className="logo">Israt_booking</span></NavLink>
                <div className="navItems">
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;