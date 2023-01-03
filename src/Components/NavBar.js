import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Categories from './Categories.js'
import Search from './Search';
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <Link className='logo' to="/">
                <GiKnifeFork />
                <i>Recipe App</i>
            </Link>
            <Categories/>
            <Search/>
        </div>
    )
}
