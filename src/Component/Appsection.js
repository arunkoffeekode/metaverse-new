import React from 'react'
import Tilt from 'react-parallax-tilt';
function Appsection() {
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className="app">
                <div className='container'>
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='app-title'>
                                <h1 class="cursor-scale">Come & explore a Human center metaverse</h1>
                                <p class="cursor-scale small">Our Aim is to bring people together through a virtual reality.<br />
                                    Our intricate, rich worlds are social by design and built to last for decades.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='app-box'>
                                <div className='app-bg'></div>
                                <div className='row app-center'>
                                    <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7 col-xxl-7'>
                                        <div className='app-padding'>
                                            <div className='app-detils'>
                                                <h2 class="cursor-scale">download our app</h2>
                                                <p class="cursor-scale small">Metaverse to provide a comprehensive experience for a human and the whole world for anyone and everyone. Explore the virtual world and start your journey with your <strong>Social-e</strong> </p>
                                                <div className='google-app'>
                                                    <button className='app-btn' type='button'>
                                                        <img src='images/playstore.png'></img>
                                                        <div className='d-block'>
                                                            <p>GET IT ON</p>
                                                            <div className='app-name'>Google Play</div>
                                                        </div>
                                                    </button>
                                                    <button className='app-btn' type='button'>
                                                        <img src='images/apple.png'></img>
                                                        <div className='d-block'>
                                                            <p>Download on the</p>
                                                            <div className='app-name'>App Store</div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-6 col-xl-5 col-xxl-5 col-sm-12'>

                                        <div className='mobile-img'>
                                            <Tilt>
                                                {/* <video muted autoPlay playsInline loop preload="auto" width={'220px'}>
                                                    <source type="video/mp4" src="images/Mobile-video.mp4" />
                                                </video> */}
                                                <img src='images/mobile.png' style={{ height: '416px' }}></img>
                                            </Tilt>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Appsection