import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='branding'>
                <Link to='/'>
                    FreeTUBE
                </Link>
            </div>
            <div className='searchContainer'>
                <input type='search' className='searchBar' />
                <div><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className='loginConatiner'>
                <Link to='/login'>
                    <button className='loginButton'>Login</button>
                </Link>
            </div>
        </div>
    )
}
