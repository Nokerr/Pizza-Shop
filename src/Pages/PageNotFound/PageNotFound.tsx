import React, { useEffect } from 'react';
import './PageNotFound.scss'
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../hooks/hook';
import { setIsopendCollapse } from '../../redux/collapsList/collapsListSlice';


const PageNotFound: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsopendCollapse(false))
    }, [])

    return (
        <h1>Page Not Found 😞
            <br />
            <br />
            <br />
            <Link to="/" className="button__link">
                <div className='button__go-back'>Come back</div>
            </Link>
        </h1>
    );
};

export default PageNotFound;