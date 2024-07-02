import React from 'react';
import '../UserLoginPage.css'; // Ensure the CSS file is correctly referenced

const UserLoginPage = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Welcome to Login Page</h1>
            <div className="login-form">
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button className="login-btn">LOGIN NOW!</button>
                <button className="register-btn">REGISTER NOW!</button>
            </div>
        </div>
    );
}

export default UserLoginPage;
