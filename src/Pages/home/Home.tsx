import React, { useEffect, useState } from 'react';
import SimpleSlider from "../../components/Slider/SimpleSlider";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaListItem from '../../components/PizzaListItem/PizzaListItem';
import './home.scss'
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/Search/Search';
import { useSelector } from 'react-redux';
import { fetchItems } from '../../redux/pizza/pizzaSlice'
import { RootState, useAppDispatch } from '../../redux/store';

const Home = () => {

    const dispatch = useAppDispatch();

    const activeCategory = useSelector((state: any) => state.filter.categoryId)
    const sortCategory = useSelector((state: RootState) => state.filter.sort)
    const searchValue = useSelector((state: RootState) => state.filter.searchValue)
    const { items, status } = useSelector((state: RootState) => state.pizza)


    const fetchPizzas = async () => {
        const setCategory = activeCategory > 0 ? 'category=' + activeCategory + '&' : '';
        const sortBy = 'sortBy=' + sortCategory.sortSelector;
        const searchPizza = searchValue ? '&name=' + searchValue : '';

        dispatch(fetchItems({ setCategory, sortBy, searchPizza }))
    }

    useEffect(() => {

        fetchPizzas();

    }, [activeCategory, sortCategory, searchValue]);


    return (
        <>
            <SimpleSlider />
            <div className="container">
                <div className="category__bar">
                    <Categories />
                    <Search />
                    <Sort />
                </div>
            </div>
            <div className="container">
                {
                    status === 'loading' ? <Spinner /> :
                        <div className="pizza__list">
                            {
                                items.length > 0 ?
                                    items.map(pizza => {
                                        return <PizzaListItem key={pizza.id} {...pizza} />
                                    }) : null
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default Home;