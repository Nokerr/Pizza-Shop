import React from "react";
import './categories.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/filters/filtersSlice'


function Categories() {

    const activeCategory = useSelector(state => state.filter.categoryId)
    const dipatch = useDispatch();

    const categoriesList = [
        'All',
        'With meat',
        'Hot',
        'Vegan'
    ]


    return (
        <div className="categories">
            <ul>
                {categoriesList.map((category, index) =>
                (
                    <li
                        key={index}
                        className={activeCategory === index ? 'active' : null}
                        onClick={() => dipatch(setActiveCategory(index))}>
                        {category}
                    </li>

                ))}
            </ul>
        </div>
    )
};

export default Categories;