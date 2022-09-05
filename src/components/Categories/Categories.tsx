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
            <div className="categories-wrapper">
                {categoriesList.map((category, index) =>
                (
                    <div
                        key={index}
                        className={activeCategory === index ? 'categories__item active' : 'categories__item'}
                        onClick={() => dipatch(setActiveCategory(index))}>
                        {category}
                    </div>

                ))}
            </div>
        </div>
    )
};

export default Categories;