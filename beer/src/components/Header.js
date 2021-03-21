import { Link } from 'react-router-dom';

import React from 'react'
const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1 className='homePage'>Home Page</h1>
            </Link>
        </header>
    );
}

export default Header;