import React from 'react'
import Fade from 'react-reveal/Fade';
function Avtar() {
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='avtar'>
                <Fade bottom>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-9 col-md-10 col-sm-12 col-xl-9 col-xxl-9'>
                                <div className='avtar-title'>
                                    <h1 className='cursor-scale'> Explore the virtual world and start your journey with your Avatar</h1>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center' style={{ alignItems: 'center' }}>
                            <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5 col-xxl-5'>

                                <div className='avtar-left'>
                                    <h2 className='cursor-scale'>Create <br />
                                        your own<br />
                                        <span className='anim-typewriter line-1'>avatar</span></h2>
                                    <p className='cursor-scale small'>Making your personal avatar using Social-e creator is simple and takes just a few minutes. Here's how you can do it in five steps.</p>
                                    <button type='button' className='avtar-btn'>Learn more</button>
                                    <button type='button' className='avtar-btn'>Create your avatar</button>

                                </div>

                            </div>
                            <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5 col-xxl-5'>

                                <div className='avtar-img'>
                                    <img src='./images/avtar-img.png' className='topBottom'></img>
                                </div>

                            </div>
                        </div>

                    </div>
                </Fade>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Avtar