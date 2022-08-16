import React from 'react';
import { addItem, minusItem, removeItem } from '../../redux/cart/cartSlice.';
import { useDispatch } from 'react-redux';
import { CartItemType } from '../../redux/cart/types';

const CollapsList: React.FC<CartItemType> = ({ id, name, description, price, size, count }) => {

    const dispatch = useDispatch();

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
        <div className="button-cart-content">
            <div onClick={removePizza} className="button-cart-content__remove">
                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path><path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" ></path></svg>
            </div>
            <div className="button-cart-content__title">{name}</div>
            <div className="button-cart-content__info">
                <p>{description}</p>
                <p className="button-cart-content__info-size">{size}</p>
            </div>
            <div className="button-cart-content__price">
                <div className="button-cart-content__price-block">
                    <span className="button-cart-content__price-block-nums">{price * count}.00 </span>
                    <span>uah</span>
                </div>
                <div className="button-cart-content__qty-block">
                    <button onClick={addPizza} className="quantity-control__button">+</button>
                    <span>{count}</span>
                    <button onClick={minusCounter} className="quantity-control__button">-</button>
                </div>
            </div>
        </div>

    );
};

export default CollapsList;