import React from 'react';
import { useState, useEffect } from 'react';
import './navBar.scss'
import { Collapse } from 'react-collapse';
import CollapsList from '../CollapseList/CollapsList';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setIsopendCollapse } from '../../redux/collapsList/collapsListSlice';
import { selectCard } from '../../redux/cart/selectors';
import { selectCollaps } from '../../redux/collapsList/selectors';



const NavBar = () => {

    const dispatch = useDispatch();

    const { totalCount, totalPrice, items } = useSelector(selectCard)
    const { isOpenedCollapse } = useSelector(selectCollaps)

    // const [isOpenedCollapse, setIsopendCollapse] = useState(false)

    useEffect(() => {
        if (totalCount > 0) {
            dispatch(setIsopendCollapse(true))
        } else {
            dispatch(setIsopendCollapse(false))
        }
    }, [totalCount])


    const changeCollaps = () => {
        dispatch(setIsopendCollapse(!isOpenedCollapse))
    }



    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < 50);
        });

    }, []);


    return (
        <>
            {scroll ? null : <nav className='navBar'></nav>}
            <nav className={scroll ? 'navBar' : 'navBar navBar-fixed'}>
                <div className="container">
                    <div className="navBar__content">
                        <div className="navBar__content-logo">
                            <Link to='/'><span>D</span>uvl <span>P</span>izza</Link>
                        </div>
                        <div className="navBar__content-navigation">
                            <a href="/" className='nav-link nav-link_active'>Pizza</a>
                            <a href="/" className='nav-link'>Drinks</a>
                            <a href="/" className='nav-link'>Sides</a>
                            <a href="/" className='nav-link'>Desert</a>
                        </div>
                        <div className="navBar__content-cart">
                            <div className="cart-wrapper" >
                                <div className="cart-counter" onClick={changeCollaps}>{totalCount}</div>
                                <div className='cart-full-price' onClick={changeCollaps}>{totalPrice}.00 uah</div>

                                <Link to='/card' className="cart-button">Checkout</Link>

                            </div>
                            <div className='collapse-wrapper'>
                                <Collapse isOpened={isOpenedCollapse}>
                                    <div className="blob" >

                                        {items.map(item => <CollapsList key={item.id} {...item} />)}

                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default NavBar;