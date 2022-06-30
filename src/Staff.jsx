import React from 'react'
import Me from './me.jpeg'
import Eli from './eli.jpeg'
import './Staff.css'

function Staff() {
    return (
        <>
            <div id='staff'>
                <div className='stfrow'>
                    <img id='walt' className='stfimg' src={Me} alt="tutor" />
                    <div className='stftext'>
                        <h3>Walter O</h3>
                        <ul>
                            <li>Topics</li>
                            <ul>
                                <li>SAT</li>
                                <li>Computer Science</li>
                                <li>Mathematics</li>
                                <li>Statistics</li>
                            </ul>
                            <li>99th percentile SAT</li>
                            <li>University of Maryland, 3.75 GPA</li>
                            <ul>
                                <li>Major: Computer Science</li>
                                <li>Minor: Statistics</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className='stfrow'>
                    <div className='stftext'>
                        <h3>Eli K</h3>
                        <ul>
                            <li>Topics</li>
                            <ul>
                                <li>Physics</li>
                                <li>Computer Science</li>
                                <li>Mathematics</li>
                            </ul>
                            <li>Georgetown, 3.9 GPA</li>
                            <ul>
                                <li>Double Major: Computer Science, Physics</li>
                            </ul>
                        </ul>
                    </div>
                    <img id='eli' className='stfimg' src={Eli} alt="tutor" />
                </div>
            </div>
        </>
    )
}

export default Staff