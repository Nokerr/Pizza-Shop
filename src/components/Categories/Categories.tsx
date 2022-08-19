import React from "react";
import './categories.scss'
import { setActiveCategory } from '../../redux/filters/filtersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hook';


const Categories: React.FC = () => {

    const activeCategory = useAppSelector(store => store.filter.categoryId)
    const dipatch = useAppDispatch();

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
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => dipatch(setActiveCategory(index))}>
                        {category}
                    </li>

                ))}
            </ul>
        </div>
    )
};

export default Categories;