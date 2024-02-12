import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='links-wrapper'>
                    <li className='link-item'>
                        <Link className='link' to='/'> Home </Link>
                    </li>
                    <li className='link-item'>
                        <Link className='link' to='/Tasks'> Tasks </Link>
                    </li>
                    <li className='link-item'>
                        <Link className='link' to='/About'> About </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
