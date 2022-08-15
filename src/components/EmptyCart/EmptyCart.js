import React from 'react';
import './emptyCart.scss';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/icons/empty-cart.png';

const EmptyCart = () => {
    return (
        <>
            <div className="cart cart--empty">
                <h2>

                    Cart is empty <span>😕</span>
                </h2>
                <p>
                    You probably haven't ordered pizza yet.
                    <br />
                    To order pizza, go to the main page.
                </p>
                <img src={cartEmptyImg} alt="Empty cart" />
                <Link to="/" className="button__link">
                    <div className='button__go-back'>Come back</div>
                </Link>
            </div>
        </>
    );
};

export default EmptyCart;