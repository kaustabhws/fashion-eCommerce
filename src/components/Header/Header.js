import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="headerwrap">
            <div className="headercontainer">
                <div className="headerlogo">
                    <h1 className="logo">Fashion</h1>
                </div>
                <div className="headersearch">
                    <select name="categories" id="">
                        <option value="All Categories">All Categories</option>
                        <option value="Men's">Men's</option>
                        <option value="Women's">Women's</option>
                        <option value="Kid's">Kid's</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                    <input type="text" id='searchtext' name='searchtext' placeholder='What do you need?' autoComplete='off' />
                    <button className="searchtext">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="headercart">
                    <i className="fa-regular fa-heart fa-xl"></i>
                    <i className="fa-solid fa-bag-shopping fa-xl"></i>
                </div>
            </div>
        </div>
    )
}

export default Header