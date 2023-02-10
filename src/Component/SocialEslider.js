import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import soci1 from '../img/soci1.png'
import soci2 from '../img/soci2.png'
import soci3 from '../img/soci3.png'
import soci4 from '../img/soci4.png'

function SocialEslider() {
    //Owl Carousel Settings Responsive
    const options1 = {
        loop: true,
        dots: true,
        items: 1,
        // stagePadding: 150,
        // stageElement: 'div',
        margin: 25,
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
                stagePadding: 10,
                nav: true,
            },
            600: {
                items: 2,
                stagePadding: 50,
                nav: true,
            },
            1000: {
                items: 3,
                stagePadding: 100,
                nav: true,
                loop: true,
            },

        },
    };
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='social-E-slider d-block'>

                <div className='row justify-content-center'>
                    <div className='col-lg-9 col-md-12 col-xl-9 col-xxl-7 col-sm-12'>
                        <div className='slider-title'>
                            <h1 class="cursor-scale">Explore The Latest In Social-e</h1>
                            <p class="cursor-scale small">Lorem ipsum dolor sit amet consectetur. Sed mauris dui habitasse libero leo in. Varius id cursus sapien nulla scelerisque sit mi hac. Venenatis nullam sit venenatis mattis eget. Egestas vel sed fusce viverra.</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12 mb-4'>
                        <OwlCarousel className='owl-carousel owl-theme' loop items={1} nav autoplay={true} {...options1}>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci1} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci2} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci3} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci4} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci3} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="item">
                                <a href='#'>
                                    <div className='social-box12'>
                                        <img src={soci4} alt="" className='image' />
                                        <div className="overlay">
                                            <div class="text cursor-scale small">How to Build Your Metaverse World for Free</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default SocialEslider