import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-link bg-slate-700 py-5 px-10'>
            <NavLink className={({isActive})=>isActive ? 'active' : undefined} to="home" title='home'>Home</NavLink>
            <NavLink to="orders" title='orders'>Order</NavLink>
            <NavLink to="inventory" title="inventory">Inventory</NavLink>
            <NavLink to="about" title="About"> About</NavLink>
        </div>
    );
};

export default Header;