import React from 'react'
import companyLogo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' src={companyLogo} alt="" />
        <div className="header-search">
            <input className='header-search-input' type="text" />
            <SearchIcon className='header-search-icon'/>
        </div>
        <div className="header-nav">
            <div className="header-menu">
                <span className="header-menu-one">Hello Guest</span>
                <span className="header-menu-two">Sign In</span>
            </div>
            
            <div className="header-menu">
                <span className="header-menu-one">Returns</span>
                <span className="header-menu-two">& Orders</span>
            </div>
            
            <div className="header-menu">
                <span className="header-menu-one">Your</span>
                <span className="header-menu-two">Prime</span>
            </div>
            
            <div className="header-menu-basket">
                <ShoppingBasketIcon/>
                <span className="header-menu-two header-menu-basket-count">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header