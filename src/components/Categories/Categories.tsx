import React from "react";
import './categories.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/filters/filtersSlice'


const Categories: React.FC = () => {

    const activeCategory = useSelector((store: any) => store.filter.categoryId)
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