import React, { useState, useRef, useEffect } from 'react';
import './sort.scss'
import { setsortCategory } from '../../redux/filters/filtersSlice'
import { SortPropertyEnum, SortTypes } from '../../redux/filters/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { SortList } from '../../redux/cart/types';


const sortListItems: SortList[] = [
    { name: 'popularity', sortSelector: SortPropertyEnum.RATING_DESC },
    { name: 'price', sortSelector: SortPropertyEnum.PRICE_DESC },
    { name: 'name', sortSelector: SortPropertyEnum.TITLE_DESC }
]

const Sort: React.FC = () => {

    const sortRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const value = useAppSelector(state => state.filter.sort);

    const [showPopup, setShowPopup] = useState(false)

    const changeCategory = (i: SortTypes) => {
        dispatch(setsortCategory(i))
        setShowPopup(!showPopup)
    }

    useEffect(() => {
        const outsideHandleClick = (e: MouseEvent) => {
            if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
                setShowPopup(false)
            }
        }

        document.body.addEventListener('click', outsideHandleClick);

        return () => {
            document.body.removeEventListener('click', outsideHandleClick);
        }
    }, [])


    return (
        < div ref={sortRef} className='sort'>
            <div className="sort__block">Sort by: <span onClick={() => setShowPopup(!showPopup)}>{value.name}</span></div>

            {
                showPopup &&
                <div className="sort__popup">
                    <ul className="sort__popup-list">
                        {
                            sortListItems.map((obj, i) =>
                                <li
                                    className={value.sortSelector === obj.sortSelector ? ' sort__popup-list-item sort__popup-list-item-active' : 'sort__popup-list-item'}
                                    key={i}
                                    onClick={() => changeCategory(obj)}>
                                    {obj.name}
                                </li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
};

export default Sort;