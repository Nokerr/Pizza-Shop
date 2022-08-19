import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './navBar.scss'
import { Collapse } from 'react-collapse';
import CollapsList from '../CollapseList/CollapsList';
import { Link } from "react-router-dom";
import { setIsopendCollapse } from '../../redux/collapsList/collapsListSlice';
import { selectCard } from '../../redux/cart/selectors';
import { selectCollaps } from '../../redux/collapsList/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';


const NavBar: React.FC = () => {

    const isMounted = useRef(false);
    const dispatch = useAppDispatch();

    const [scroll, setScroll] = useState(true);

    const { totalCount, totalPrice, items } = useAppSelector(selectCard)
    const { isOpenedCollapse } = useAppSelector(selectCollaps)


    useEffect(() => {
        if (isMounted.current) {
            const cartItems = JSON.stringify(items)
            localStorage.setItem('cart', cartItems)
        }
        isMounted.current = true
    }, [items])


    useEffect(() => {
        if (totalCount > 0) {
            dispatch(setIsopendCollapse(true))
        } else {
            dispatch(setIsopendCollapse(false))
        }
    }, [totalCount])


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < 50);
        });

    }, []);


    const changeCollaps = () => {
        dispatch(setIsopendCollapse(!isOpenedCollapse))
    }


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