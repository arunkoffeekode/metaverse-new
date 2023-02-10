import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import slider1 from '../img/slider-1.png'
import slider2 from '../img/slider-2.png'
import slider3 from '../img/slider-3.png'
import slider4 from '../img/slider-4.png'
import slider5 from '../img/slider-5.png'
function Massiveslider() {
    //Owl Carousel Settings Responsive
    const options1 = {
        loop: true,
        dots: false,
        items: 1,
        // stagePadding: 150,
        // stageElement: 'div',
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        center: true,
        smartSpeed: 1030,
        responsiveClass: true,
        // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: true,
        responsive: {
            0: {
                items: 1,
                // stagePadding: 20,
                nav: true,
            },
            600: {
                items: 3,
                // stagePadding: 50,
                nav: true,
            },
            1000: {
                items: 5,
                // stagePadding: 150,
                nav: true,
                loop: true,
            },

        },
    };
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='social-slider d-block'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-9 col-md-8 col-xl-9 col-xxl-7 col-sm-12'>
                            <div className='slider-title'>
                                <h1 class="cursor-scale">Enter into a massive
                                    social experience.</h1>
                                <p class="cursor-scale small">Social-e is a Decentralized Dating App, as a part of Social-e Dating Network. With great technological advantage and an AI driven system, Social-e aims to be the Top Dating App and Network in the World.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12 mb-4'>
                            <OwlCarousel className='owl-carousel owl-theme' loop items={1} nav autoplay={true} {...options1}>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider1} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider2} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider3} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider4} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider5} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div className='social-box'>
                                        <img src={slider1} alt="" />
                                        <div className='slider-item-details'>
                                            <h6 class="cursor-scale small">spend fantasy in the garden</h6>
                                            <p class="cursor-scale small">Going to a park and doing something together is one of the most beautiful days.</p>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                            <div className='social-slider-btn'>
                                <button type='button' className='social-s-btn'>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Massiveslider