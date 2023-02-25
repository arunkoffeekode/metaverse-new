import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import logo1 from '../../img/logo1.png'
import { useEffect } from "react";
function Header() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("sticky").style.top = "0";
        } else {
            document.getElementById("sticky").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }


    return (
        <div>
            {/* <div className='c-section' style={{height:'auto'}}> */}

            <div id="navbar">
                <div id='sticky'>
                    <div className='container-fluid' >
                        <div className='row'>

                            <div className='col-lg-12'>
                                <div className='row' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-2 col-2 col-md-6'>
                                        <div className='logo-section cursor-scale small'>
                                            <a href='#'><img src={logo} alt="Logo" title='Logo' className='desk'></img><img src={logo1} alt="Logo" title='Logo' className='mobile'></img></a>
                                        </div>
                                    </div>
                                    <div className='col-lg-10 col-10 col-md-6'>
                                        <div className='right-sec'>
                                            <ul>
                                                <li>
                                                    <a href='#'>launch app</a>
                                                </li>
                                                <li>
                                                    <a href='#'>Log in</a>
                                                </li>
                                                <li>
                                                    <a href='#' className='ico'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Header