import React from 'react'
function Xrelight() {
    return (
        <div>
            {/* <div className='c-section'> */}
                <section className='xr'>
                    <div className='container'>
                        <div className='row' style={{ alignItems: 'center' }} >
                            <div className='col-lg-5 col-md-12 col-xxl-6 col-xl-5 col-sm-12'>
                                <div className='xr-left'>
                                    <h1 className='cursor-scale'>Optimized <br />
                                        For <span >XR</span> Elite</h1>
                                    <p class="cursor-scale small">The XR Portal To The Open Metaverse Enabling You To Play, Learn, Socialize, Work And Travel To Different Worlds, Making VIVERSE Even More Immersive From The Second You Put On Your Headset.</p>
                                    <button type='button' className='xr-btn'>Learn more</button>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-12 col-xxl-6 col-xl-7 col-sm-12'>
                                <div className='xr-right'>
                                    <div className="skew">
                                        <div className="scaled">
                                            <img src="./images/qwe.png" alt="" />
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

export default Xrelight