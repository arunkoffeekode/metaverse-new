import React from 'react'
import Header from './Header/Header'
function Vr() {


    return (
        <div>
            <div className='mountain'>
                <Header className="he"></Header>
                <div className='container-fluid'>

                    <div className='row dt'>
                        <div className='col-lg-5 col-md-7 col-sm-12'>
                            <div className='vr-details'>
                                <div className='vr-details-box'>
                                    <h5 className='cursor-scale'>Now Get The<br />
                                        <span> Real Dating </span> Experience </h5>
                                    <p className='cursor-scale small'>a social network and virtual world where users can chat and play games with each other. Social-e is a dating feature, that allows users to express their interest in each other and users have organized virtual dating events and meetups.</p>
                                    <button type='button' className='vr-btn'>Explore</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-lg-7 col-md-5 col-sm-12'>
                            <div className="social-ft">
                                <ul>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-facebook-square fb"></i></span></a></li>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-linkedin fb"></i></span></a></li>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-instagram fb"></i></span></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='vr-img'>

                </div>

            </div>
        </div>
    )
}

export default Vr