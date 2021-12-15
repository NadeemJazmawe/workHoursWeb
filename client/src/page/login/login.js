import React from 'react'
import './login.css'

import logo from '../../images/Logo.jpeg'


export default function login() {
    return (
        <div className="loginPage">
            
            <div className="intro">
                <div className="appName">
                    <h1>Work Hours Web</h1>
                </div>
                <div className="aboutApp">
                    welcome to our app <br />
                    our app help you to insert your daily work hour time <br />
                    easy access, completle free <br />
                </div>
            </div>

            <div className="logoImage">
                <img src={logo} />
            </div>

            <div className="habal">
                
            </div>
         

        </div>
    )
}
