import React, {useState} from 'react'
import './login.css'

import logo from '../../images/Logo.jpeg'


export default function login() {

    const [ID, setID] = useState("");

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

            <div className="loginSide">
                <div className="userName">
                    <label>User ID </label>
                    <input type="text" id="id" name="username"/>
                </div>

                <div className="password" >
                    <label>Password </label>
                    <input type="password" id="password" />
                </div>
                <br />
                <button type="submit"/>
            </div>
         

        </div>
    )
}

