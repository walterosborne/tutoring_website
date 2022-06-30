import React from 'react'
import './Plans.css'

import Sat from './sat.png'
import Acorn from './acorn.jpeg'
import Banner from './banner.jpeg'


function Plans() {
    return (
        <div id='planspage'>
            <div className='plan'>
                <img id='satimg' src={Sat} alt="SAT" />
                <h2>SAT</h2>
                <div className="texty">
                    <h3>We don't offer empty promises. Our 2 month SAT imporvement plan includes:</h3>
                    <ul className='mainul'>
                        <li>1-1 Personal Sessions</li>
                        <ul>
                            <li>Guided test corrections</li>
                            <li>Test-taking tips and strategies</li>
                        </ul>
                        <li>Actionable plans</li>
                        <ul>
                            <li>Free review materials</li>
                            <li>Weekly targeted homework</li>
                        </ul>
                        <li>Expert Gurantee</li>
                        <ul>
                            <li>SAT Tutors have scored in the 99th percentile themselves</li>
                            <li>Improvement or your money back</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='plan'>
                <div id="gradepics">
                    <img id='acorn' src={Acorn} alt="SAT" />
                    <img id='banna' src={Banner} alt="SAT" />
                </div>
                <h2>Topic/AP Tutoring</h2>
                <div className="texty">
                    <h3>Improve your child's grades or AP scores</h3>
                    <ul className='mainul'>
                        <li>1-1 Personal Sessions</li>
                        <ul>
                            <li>Guided test corrections</li>
                            <li>Homework help</li>
                            <li>Topic lessons</li>
                        </ul>
                        <li>Actionable plans</li>
                        <ul>
                            <li>Free review materials</li>

                        </ul>
                        <li>Expert Guarantee</li>
                        <ul>
                            <li>Tutors are qualified, through their major and having received an 'A' in the given course</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Plans