import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    const [isDropdownOpen1, setDropdownOpen1] = useState(false);

    const toggleDropdown1 = () => {
        setDropdownOpen1(!isDropdownOpen1);
    };

    const [isDropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <div className="nav-bar">
            <div className="nav-container">
                <div className="top-nav">
                    <div className="nav-dept">
                        <div className="dept-container">
                            <i className="fa-solid fa-bars" style={{ color: '#ffffff' }}></i>
                            <span>All Departments</span>
                            <ul className="depart-hover">
                                <li className="active"><a>Women's Clothing</a></li>
                                <li><a>Men's Clothing</a></li>
                                <li><a>Underwear</a></li>
                                <li><a>Kid's Clothing</a></li>
                                <li><a>Brand Fashion</a></li>
                                <li><a>Accessories/Shoes</a></li>
                                <li><a>Luxury Brands</a></li>
                                <li><a>Brand Outdoor Apparel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li className="link nav-active"><a href="./index.html">Home</a></li>
                            <li className='link'><a href="./shop.html">Shop</a></li>
                            <li className='link'><a>Collection</a>
                                <ul className="dropdown">
                                    <li><a>Men's</a></li>
                                    <li><a>Women's</a></li>
                                    <li><a>Kid's</a></li>
                                </ul>
                            </li>
                            <li className='link'><a href="./blog.html">Blog</a></li>
                            <li className='link'><a href="./contact.html">Contact</a></li>
                            <li className='link'><a>Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./check-out.html">Checkout</a></li>
                                    <li><a href="./faq.html">Faq</a></li>
                                    <li><a href="./register.html">Register</a></li>
                                    <li><a href="./login.html">Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-nav">
                    <div className="mobile-container">
                        <div className="mobile-menu">
                            <div className="mobile-btn">
                                <a onClick={toggleMobileNav}>
                                    <span>MENU</span>
                                    <i className="fa-solid fa-bars fa-xl" style={{ color: '#ffffff' }}></i>
                                </a>
                            </div>
                        </div>
                        <nav className={`mobile-navbar ${isMobileNavOpen ? 'show' : ''}`}>
                            <ul className='navMobile'>
                                <li className="nav-main active"><a className='nav-anc' role="menuitem">Home</a></li>
                                <li className="nav-main"><a className='nav-anc' role="menuitem">Shop</a></li>
                                <li className="nav-main">
                                    <a onClick={toggleDropdown2} className='nav-anc' style={{ outline: 'none' }}>
                                        <a>Collection</a>
                                        <span className="slicknav_arrow">►</span></a>
                                    <ul className={`dropdown ${isDropdownOpen2 ? '' : 'hidden'}`} role="menu" aria-hidden="true">
                                        <li><a role="menuitem" tabIndex="-1">Men's</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Women's</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Kid's</a></li>
                                    </ul>
                                </li>
                                <li className="nav-main"><a className='nav-anc' role="menuitem">Blog</a></li>
                                <li className="nav-main"><a className='nav-anc' role="menuitem">Contact</a></li>
                                <li className="nav-main">
                                    <a onClick={toggleDropdown1} className='nav-anc' role="menuitem" style={{ outline: 'none' }}>
                                        <a>Pages</a>
                                        <span className="slicknav_arrow">►</span></a>
                                    <ul className={`dropdown ${isDropdownOpen1 ? '' : 'hidden'}`} role="menu" aria-hidden="true">
                                        <li><a role="menuitem" tabIndex="-1">Blog Details</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Shopping Cart</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Checkout</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Faq</a></li>
                                        <li><a role="menuitem" tabIndex="-1">Login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
