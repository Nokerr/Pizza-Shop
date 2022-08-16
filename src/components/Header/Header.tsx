import React from 'react';
import './header.scss'
import location_icon from '../../assets/icons/location-icon.png';
import phone_icon from '../../assets/icons/phone_icon.png';


const Header = () => {
    return (
        <header className='fake-header'>
            <div className="container">
                <div className="fake-header__content">
                    <div className="fake-header__phone">
                        <span><img src={phone_icon} alt="phone" /></span>
                        <a href="tel:+380442221122" className='fake-header__phone-number'>044 222 11 22</a>
                    </div>
                    <div className="fake-header__city">
                        <span><img src={location_icon} alt="location" /></span>
                        <a href="" className='fake-header__city-name' >Kyiv</a>
                    </div>
                    <div className="fake-header__right">
                        <div className="fake-header__language">
                            <select className='fake-header__language-button' defaultValue='Eng'>
                                <option value="eng">eng</option>
                                <option value="ua">ua</option>
                            </select>
                        </div>
                        <div className="fake-header__sing-in">
                            <button className='fake-header__sing-in-button'>Sing in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;