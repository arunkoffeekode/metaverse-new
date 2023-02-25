import React from 'react'
import Fade from 'react-reveal/Fade';
function Slider() {
    return (
        <div>
            <div id="video-carousel-example2" class="carousel slide" data-ride="carousel" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='animated-slider'>
                            <div className='container'>
                                <div className='row justify-content-center' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-5 col-xl-5 col-xxl-5 col-md-6 order-3 order-lg-1 order-md-1'>
                                        <Fade bottom big>
                                            <div class="animated fadeInDown">
                                                <div className='slider-details'>
                                                    <h1 className='cursor-scale anim-typewriter line-1'>Hi, first time at
                                                        World?</h1>
                                                    <p class="cursor-scale small">Take your friendships to a whole new level! Chat with your friends in interactive virtual rooms and meet new people from all over the world.</p>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 order-2 order-lg-2 order-md-2'>
                                        <div className='courael-img'>
                                            <img src='./images/world-slider.png'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div className='animated-slider'>
                            <div className='container'>
                                <div className='row justify-content-center' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-5 col-xl-5 col-xxl-5 col-md-6 order-3 order-lg-1 order-md-1'>
                                        <Fade bottom big>
                                            <div class="animated fadeInDown">
                                                <div className='slider-details'>
                                                    <h1 className='cursor-scale'>VR Dating App 
for the 
Metaverse</h1>
                                                   
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className='col-lg-6 col-xl-6 col-xxl-6 col-md-6 order-2 order-lg-2 order-md-2'>
                                        <div className='courael-img'>
                                            <img src='./images/slider-2.png'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Slider