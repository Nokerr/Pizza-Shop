import React, { useEffect } from 'react';
import './cart.scss'
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import { cleareItemList } from '../../redux/cart/cartSlice.';
import { setIsopendCollapse } from '../../redux/collapsList/collapsListSlice';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import OrderForm from '../../components/OrderForm/OrderForm';

const Card: React.FC = () => {

    const dispatch = useAppDispatch();

    const { items, totalCount, totalPrice } = useAppSelector(state => state.cart)


    useEffect(() => {
        dispatch(setIsopendCollapse(false))
    }, [totalCount])


    return (
        <div className="container">
            {
                totalCount ?
                    <div className="cart">
                        <div className="cart__header">
                            <div className="cart__header-title">
                                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20" /><circle cx="80" cy="204" fill="none" r="20" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><circle cx="184" cy="204" fill="none" r="20" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                Cart
                            </div>
                            <div onClick={() => dispatch(cleareItemList())} className="cart__header-remove_button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Clear Cart
                            </div>
                        </div>

                        {items.map(item => <CartItem key={item.id} {...item} />)}

                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <div className="total-counter">Total pizzas: <span>{totalCount} pcs.</span></div>
                                <div className="total-price">Order price: <span>{totalPrice} uah</span></div>
                            </div>
                            <OrderForm />
                        </div>
                    </div> :
                    <EmptyCart />
            }

        </div>

    );
};

export default Card;