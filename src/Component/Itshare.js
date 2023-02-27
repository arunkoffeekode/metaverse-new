import React from 'react'

function Itshare() {
    return (
        <div>
            {/* <div className='c-section'> */}
            <section className='xr mb-4'>
                <div className='container'>
                    <div className='row' style={{ alignItems: 'center' }} >
                        <div className='col-lg-7 col-md-12 col-xxl-6 col-xl-7 col-sm-12'>
                            <div className='xr-right1'>
                                <div className="skew1">
                                    <div className="scaled1">
                                        <img src="./images/xr-2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 col-xxl-6 col-xl-5 col-sm-12'>
                            <div className='xr-left'>
                                <h1 className='cursor-scale' style={{ textAlign: 'right' }}>Live <span>it</span>  Build <span>it</span><br /> Share <span>it</span></h1>
                                <p class="cursor-scale small" style={{ textAlign: 'right' }}>The XR Portal To The Open Metaverse Enabling You To Play, Learn, Socialize, Work And Travel To Different Worlds, Making VIVERSE Even More Immersive From The Second You Put On Your Headset.</p>
                                <button type='button' className='xr-btn' style={{ float: 'right' }}>Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default Itshare