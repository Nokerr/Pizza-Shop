import React, { useState, useRef, useEffect } from 'react';
import './sort.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setsortCategory } from '../../redux/filters/filtersSlice'

const sortListItems = [
    { name: 'popularity', sortSelector: 'rating' },
    { name: 'price', sortSelector: 'price' },
    { name: 'name', sortSelector: 'name' }
]

const Sort = () => {
    const sortRef = useRef();

    const value = useSelector(state => state.filter.sort);
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(false)

    const changeCategory = (i) => {
        dispatch(setsortCategory(i))
        setShowPopup(!showPopup)
    }

    useEffect(() => {

        const outsideHandleClick = (e) => {
            if (!e.path.includes(sortRef.current)) {
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