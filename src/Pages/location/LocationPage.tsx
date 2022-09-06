import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { setIsopendCollapse } from '../../redux/collapsList/collapsListSlice';
import './location.scss'
const Location = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsopendCollapse(false))
    }, [])

    return (
        <div className='container'>
            <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.1265027114574!2d30.523324329263414!3d50.450301352662024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa1b91f%3A0x42d5962fe7e791c!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LvQtdC20L3QvtGB0YLQuA!5e0!3m2!1sru!2sua!4v1662456122033!5m2!1sru!2sua" width="800" height="600"></iframe>
            </div>
        </div>
    );
};

export default Location;