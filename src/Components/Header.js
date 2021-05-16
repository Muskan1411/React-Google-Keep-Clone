import React from 'react';
import logo from '../Images/MyNotes.png';

const Header = () => {
    return <>
        <div className='header'>
            <img src={logo} alt='My Notes Logo' width='140' height='100'/>
            <h1 className='mt-4'>MY Notes</h1>
        </div>
    </>
}

export default Header;