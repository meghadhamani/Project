import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    const toggleMenu = () => {
        setisOpen(prev => !prev)
        
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <h2>HANDICRAFT STORE</h2>
                        </div>
                        <div>
                            <ul className={isOpen ? "nav-link open" : "nav-link"}>
                                <li>
                                    <a href="/home" className='active'>Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact Us</a>
                                </li>

                            </ul>
                            <div className='icon' onClick={toggleMenu}>
                                <FaBars />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="content">
                        <></>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Navbar;