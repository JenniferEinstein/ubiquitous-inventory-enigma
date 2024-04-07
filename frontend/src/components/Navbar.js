// eslint-disable-next-line 
import { Link } from 'react-router-dom';
import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <nav className='container'>
        <section className='main'>
            <h1>Inventorium</h1>
        </section>
        <section className='categories-section'>
            <h6>Furniture</h6>
            <h6>Clothing</h6>
            <h6>Toys</h6>
            <h6>More to Come</h6>
        </section>
    </nav>
    )
}

export default Navbar;