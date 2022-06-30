import React from 'react'
import { Link } from 'react-router-dom'
import Mtn from './mtn.svg'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div id='bar'>
                <div id='logoside'>
                    <Link to='/' id='homelink'><h2>Olympus Tutoring</h2><img src={Mtn} /></Link>
                </div>
                <div id='links'>
                    <Link to='/staff'><h3 id='stafflink'>Staff</h3></Link>
                    <Link to='/plans'><h3 id='plans'>What We Do</h3></Link>
                    <Link to='/contact'><h3 id='contact'>Contact Us</h3></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar