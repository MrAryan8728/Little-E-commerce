import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import './header.css'
import UserContext from '../utils/userContext';

const Header = () => {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLFQPZdCxqOXrNUwK8HJRwrPt5nCpzrHBvg&s";
    const data = useContext(UserContext);
    const Items = useSelector((state) => state.cart.items);
    return (
        <div className=' Header-Container'>
            {/* Logo */}
            <div className=' Logo-Container'>
                <img src={url} />
            </div>
            {/* List */}
            <div className='Item-Container'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Products</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/cart'>🛒{Items.length}</Link></li>
                    <li>{data.userName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header