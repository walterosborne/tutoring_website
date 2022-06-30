import React from 'react'
import './Contact.css'
import Mail from './mail.svg'
import Phone from './phone.svg'

function Contact() {
    return (
        <div id='wrapper'>
            <h1>Get in touch</h1>
            <div id="content">
                <a href="mailto:wosborne@terpmail.umd.edu" target='_blank'>
                    <div className="contact">
                        <div className="label">
                            <h2>Email Us</h2>
                            <img className='img' src={Mail} />
                        </div>
                        <h3>wosborne@terpmail.umd.edu</h3>
                    </div>
                </a>
                <div className="contact">
                    <div className="label">
                        <h2>Give us a Ring</h2>
                        <img className='img' src={Phone} />
                    </div>
                    <h3>202-902-8861</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact