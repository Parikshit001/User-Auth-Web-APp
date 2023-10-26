import React from "react";
import './LoginSignup'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    return (
        <div className="container">
            <div className="header">

                <div className="text">Sign UP</div>
                <div className="underline"></div>

            </div>
                <div className="inputs">
                <div className="inputs">
                    <img src={user_icon} alt="" /> 
                    <input type="text" placeholder="Name" name="" id="" />   
                </div>
                <div className="inputs">
                    <img src={email_icon} alt="" /> 
                    <input type="email" placeholder="Email-id" name="" id="" />   
                </div>
                <div className="inputs">
                    <img src={password_icon} alt="" /> 
                    <input type="password" placeholder="Password" name="" id="" />   
                </div>
            </div>
            <div className="forgot-password"> Lost Password? <span>Click Here!!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default LoginSignup