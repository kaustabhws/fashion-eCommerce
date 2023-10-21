import React from 'react'
import './Top.css'

const Top = () => {
    return (
        <div className="top-header">
            <div className="top-container">
                <div className="left-top">
                    <div className="email-header">
                        <i className=" fa fa-envelope"></i>
                        <p className="email">support@fashion.com</p>
                    </div>
                    <div className="line"></div>
                    <div className="contact-header">
                        <p className="contact">+918876594485</p>
                    </div>
                </div>
                <div className="right-top">
                    <div className="social-header hide">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </div>
                    <div className="line hide"></div>
                    <div className="language-header">
                        <img src="https://preview.colorlib.com/theme/fashi/img/flag-1.jpg.webp" alt="" />
                        <p className="language">English</p>
                    </div>
                    <div className="line"></div>
                    <div className="login-header">
                        <i className="fa-solid fa-user"></i>
                        <p className="account">Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;