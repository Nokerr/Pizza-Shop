import React from 'react';
import './cartItem.scss'
import { addItem, minusItem, removeItem } from '../../redux/cart/cartSlice.';
import { CartItemType } from '../../redux/cart/types';
import { useAppDispatch } from '../../hooks/hook';


const CartItem: React.FC<CartItemType> = ({ id, name, price, img, size, crustType, count }) => {

    const dispatch = useAppDispatch();

    const addPizza = () => {
        dispatch(addItem({ id }))
    }


    const minusCounter = () => {
        dispatch(minusItem(id))
    }


    const removePizza = () => {
        dispatch(removeItem(id))
    }


    return (
        <>
            <div className="cart__divider"></div>
            <div className="cart__item">
                <div className="cart__item-descr">
                    <img src={img} alt="pizza" className='item-img' />
                    <div className="item-info">
                        <div className="item-info_name">{name}</div>
                        <div className="item-info_type">{size}, {crustType}</div>
                    </div>
                </div>
                <div className="cart__item-counter">
                    <div onClick={minusCounter} className="minus_button">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path></svg>
                    </div>
                    <span>{count}</span>
                    <div onClick={addPizza} className="pluss_button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg></div>
                </div>
                <div className="cart__item-price">{price * count} uah</div>
                <div onClick={removePizza} className="cart__item-remove_button">
                    <div className="remove_button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;