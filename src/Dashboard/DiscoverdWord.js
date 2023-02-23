import React from 'react'
import discord from "../img/Discoverd.png"
function DiscoverdWord() {
    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">
                        <div className='col-lg-8 col-md-12 col-sm-12 col-xl-8 col-xxl-8'>
                            <div className='discord-img'>
                                <img src={discord}></img>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
                            <div className='night-camp'>
                                <h3>Movie Nights Camp</h3>
                                <img src={discord}></img>
                                <p>Lorem ipsum dolor sit amet consectetur. Tristique pellentesque adipiscing purus enim justo tempus vestibulum blandit tortor. Volutpat mus dui rhoncus pellentesque. Magna diam mi egestas.</p>
                                <button type='button' className='night-opn-btn'>open</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                            <div className='Discoverd-title'>
                                <h5>in to this world...</h5>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
                            <div class="blog-item hover03">
                                    <img src="images/world-1.png" alt="Blog" />
                                <div class="blog-inner">
                                    <h3>
                                        The Room of True Love
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
                            <div class="blog-item hover03">
                                    <img src="images/world-2.png" alt="Blog" />
                                <div class="blog-inner">
                                    <h3>
                                      This Spaceship Hangar
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
                            <div class="blog-item hover03">
                                    <img src="images/world-3.png" alt="Blog" />
                                <div class="blog-inner">
                                    <h3>
                                        Immersive Space Adventure
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverdWord