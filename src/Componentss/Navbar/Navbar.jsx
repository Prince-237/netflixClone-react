// import React from 'react'
import './Navbar.css'
// import assets from '../../assets/asset'
import { FaSearchengin } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png'
import notif from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import down from '../../assets/caret_icon.svg'
import { useEffect, useRef, useState } from 'react';
import { logout } from '../../firebase';

const Navbar = () => {

    const navRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!navRef.current) {
                return;
            }

            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            } else {
                navRef.current.classList.remove('nav-dark');
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navbar' ref={navRef}>
            <div className='navbar-left'>
                <img src={logo} alt="" className='w-22.5 h-15' />
                <button
                    type='button'
                    className='navbar-toggle'
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li className='cursor-pointer' onClick={closeMenu}>Home</li>
                    <li className='cursor-pointer' onClick={closeMenu}>TV Shows</li>
                    <li className='cursor-pointer' onClick={closeMenu}>Movies</li>
                    <li className='cursor-pointer' onClick={closeMenu}>New & Popular</li>
                    <li className='cursor-pointer' onClick={closeMenu}>My List</li>
                    <li className='cursor-pointer' onClick={closeMenu}>Browse by Languages</li>
                </ul>
            </div>
            <div className='navbar-right flex gap-5 items-center'>
                <FaSearchengin className='icons w-5 cursor-pointer' />
                <p>Children</p>
                <img src={notif} alt="" />
                <div className="navbar_profile relative flex items-center gap-2.5 cursor-pointer">
                    <img src={profile} alt="" />
                    <img src={down} alt="" />
                    <div className="dropdown absolute w-max ">
                        <p className='cursor-pointer text-[13px]' onClick={logout}>Sign Out Of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar