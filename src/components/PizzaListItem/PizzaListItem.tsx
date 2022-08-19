import React from 'react';
import './pizzaListItem.scss'
import { useState, useEffect } from 'react';
import { addItem, minusItem } from '../../redux/cart/cartSlice.';
import { Pizza } from '../../redux/pizza/types';
import { selectCartItemById } from '../../redux/pizza/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';


const PizzaListItem: React.FC<Pizza> = ({ id, name, description, price, img, size, crustType }) => {

    const dispatch = useAppDispatch();

    const item = useAppSelector(selectCartItemById(id))

    const [pizzaSize, setPizzaSize] = useState(0);
    const [typeOfCrust, setTypeOfCrurst] = useState(0);
    const [pizzaPrice, setPizzaPrice] = useState(0);

    const addPizza = () => {
        dispatch(addItem({ id }))
    }


    const removePizza = () => {
        dispatch(minusItem(id))
    }


    useEffect(() => {
        setPizzaPrice(price[pizzaSize][typeOfCrust])
    }, [pizzaSize, typeOfCrust])


    const addPizzaToCart = () => {
        const pizzaItem = {
            id,
            name,
            description,
            price: price[pizzaSize][typeOfCrust],
            img,
            size: size[pizzaSize],
            crustType: crustType[typeOfCrust],
        }
        dispatch(addItem(pizzaItem))
    }


    return (
        <div className="item__wrapper">
            < div className="pizza-list__item" >
                <div className="pizza-list__item-img">
                    <img src={img} alt="pizza" />
                </div>
                <div className="pizza-list__item-title">{name}</div>
                <div className="pizza-list__item-descr">
                    <p>{description}</p>
                    <a href="/">Replace ingredients</a>
                </div>
                <div className="pizza-list__item-details">
                    <div className="ditails_size">
                        {
                            size.map((size, i) =>
                                <button className={pizzaSize === i ? "ditails_size-button ditails_size-button-active" :
                                    "ditails_size-button "}
                                    onClick={() => setPizzaSize(i)}
                                    key={i}
                                >{size}</button>)
                        }
                    </div>
                    <div className="ditails_crust">
                        {
                            crustType.map((type, i) =>
                                <button className={typeOfCrust === i ? "ditails_size-button ditails_size-button-active" :
                                    "ditails_size-button "}
                                    onClick={() => setTypeOfCrurst(i)}
                                    key={i}
                                >{type}</button>)
                        }
                    </div>
                    <div className="ditails_cart">
                        <div className="ditails_cart-price">
                            {pizzaPrice}
                            <span>uah</span>
                        </div>
                        {
                            item ? <div className="ditails_cart-counter">
                                <button onClick={removePizza} className="cart-minus">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 491.858 491.858"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path></svg>
                                </button>
                                <div className="cart-counter">{item.count}</div>
                                <button onClick={addPizza} className="cart-plus">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg>
                                </button>
                            </div> :
                                <button onClick={addPizzaToCart} className="ditails_cart-button">To cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
};

export default PizzaListItem;