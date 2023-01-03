import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__social-links'>
                <FaFacebook className='icon'/>
                <FaGithub className='icon'/>
                <FaLinkedin className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagramSquare className='icon'/>
            </div>
            <div className='footer-navbar'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="meal/breakfast">Breakfast</Link>
                <Link className='nav-link' to="meal/lunch">Lunch</Link>
                <Link className='nav-link' to="meal/dinner">Dinner</Link>
            </div>
            <div className='contact'>
                <p>contact</p>
                |
                <p>0790836007</p>
                |
                <p>tshifura887@gmail.com</p>
            </div>
        </div>
    )
}
