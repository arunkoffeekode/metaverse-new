import React from 'react'

function Head() {
    return (
        <div>
            <div className="header">
                <a href="#/" id="toggle_btn">
                    <i className="fe fe-text-align-left"></i>
                </a>
                <div className="header-left">
                    <a to="/" className="logo">
                        <img src="images/logo.png" alt="Logo" />
                    </a>
                    <a to="/" className="logo logo-small">
                        <img src="images/logo.png" alt="Logo" />
                    </a>
                </div>

                <a className="mobile_btn" id="mobile_btn">
                    <i className="fa fa-bars"></i>
                </a>

            </div>
        </div>
    )
}

export default Head