import React from 'react';
import './PageNotFound.scss'
import { Link } from "react-router-dom";


const PageNotFound: React.FC = () => {


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