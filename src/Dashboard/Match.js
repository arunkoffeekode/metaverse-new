import React from 'react'

function Match() {
    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="Match">

                        <div className='row' style={{ alignItems: 'center' }}>
                            <div className='col-lg-6 col-md-4 col-xl-6 col-xxl-6 col-sm-12'>
                                <div className='search-order'>
                                    <h5>Online (1 - 35 of 1000+)</h5>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-8 col-xl-6 col-xxl-6 col-sm-12'>
                                <div className='search-order'>
                                    <div class="input-group">
                                        <div id="search-autocomplete" class="form-outline">
                                            <input type="search" id="form1" class="form-control" placeholder='search' />

                                        </div>
                                        <button type="button" class="btn btn-primary">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn drp-bnt dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Order by
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Order by</a></li>
                                            <li><a className="dropdown-item" href="#">Order by</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>

                                    <button type='button' className='filter-btn'><i class="fa fa-sliders" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 mb-3'>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xxl-6 col-xl-6'>
                                <div className='courasel-section'>
                                    <div className='courasel-box'>
                                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="./images/player-2.png" class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./images/player-2.png" class="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>

                                        <div className='description'>
                                            <div className='online-location'>
                                                <div className='left-loc'>
                                                    <h5>BP8789</h5>
                                                    <span>Surat, Gujarat (India) </span>
                                                </div>
                                                <div className='right-loc'>
                                                    <i class="fa fa-circle"></i>
                                                    <span>Online</span>
                                                </div>
                                            </div>
                                            <h6>Description</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur. Mi mollis nec arcu nisl. Odio rutrum urna id quis tortor id at. Ipsum morbi justo volutpat pellentesque sed. Viverra nam dictumst arcu id sit condimentum viverra. Viverra purus in nisi nullam pellentesque ornare leo cursus. </p>
                                        </div>
                                    </div>

                                    <div className='courasel-footer'>
                                        <div className='footer-btn'>
                                            <button type='button' className='colse-btn'><i class="fa fa-close"></i></button>
                                            <button type='button' className='colse-btn-1'>Connect</button>
                                            <button type='button' className='colse-btn'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12 col-xxl-6 col-xl-6'>
                                <div className='row g-3'>
                                    <div className='col-lg-6 col-md-4 col-xl-6 col-xxl-6'>
                                        <div className='Match-player'>
                                            <div className='player-active'>
                                                <div className='circle-point'></div>
                                            </div>
                                            <div className='paly-img'>
                                                <img src='./images/player-1.png'></img>
                                            </div>
                                            <div className='code'>
                                                <h5> BP8789</h5>
                                                <span>Surat, Gujarat (India) </span>
                                                <div className='connect-sec'>
                                                    <button type='button' className='connect-btn-link'>Connect</button>
                                                    <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-4 col-xl-6 col-xxl-6'>
                                        <div className='Match-player'>
                                            <div className='player-active'>
                                                <div className='circle-point'></div>
                                            </div>
                                            <div className='paly-img'>
                                                <img src='./images/player-1.png'></img>
                                            </div>
                                            <div className='code'>
                                                <h5> BP8789</h5>
                                                <span>Surat, Gujarat (India) </span>
                                                <div className='connect-sec'>
                                                    <button type='button' className='connect-btn-link'>Connect</button>
                                                    <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-4 col-xl-6 col-xxl-6'>
                                        <div className='Match-player'>
                                            <div className='player-active'>
                                                <div className='circle-point'></div>
                                            </div>
                                            <div className='paly-img'>
                                                <img src='./images/player-1.png'></img>
                                            </div>
                                            <div className='code'>
                                                <h5> BP8789</h5>
                                                <span>Surat, Gujarat (India) </span>
                                                <div className='connect-sec'>
                                                    <button type='button' className='connect-btn-link'>Connect</button>
                                                    <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-4 col-xl-6 col-xxl-6'>
                                        <div className='Match-player'>
                                            <div className='player-active'>
                                                <div className='circle-point'></div>
                                            </div>
                                            <div className='paly-img'>
                                                <img src='./images/player-1.png'></img>
                                            </div>
                                            <div className='code'>
                                                <h5> BP8789</h5>
                                                <span>Surat, Gujarat (India) </span>
                                                <div className='connect-sec'>
                                                    <button type='button' className='connect-btn-link'>Connect</button>
                                                    <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='valentine'>
                            <img src='./images/valintine.png'></img>
                        </div>

                        <div className='row g-3 mb-3'>
                            <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12'>
                                <div className='match-title'>
                                    <h6>Total Matches (1,361)</h6>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3'>
                            <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12'>
                                <div className='match-title'>
                                    <h6>Matches Shortlisted By You (7)</h6>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-xl-2 col-xxl-2'>
                                <div className='Match-player'>
                                    <div className='player-active'>
                                        <div className='circle-point'></div>
                                    </div>
                                    <div className='paly-img'>
                                        <img src='./images/player-1.png'></img>
                                    </div>
                                    <div className='code'>
                                        <h5> BP8789</h5>
                                        <span>Surat, Gujarat (India) </span>
                                        <div className='connect-sec'>
                                            <button type='button' className='connect-btn-link'>Connect</button>
                                            <button type='button' className='wishlist'><i className='fa fa-heart'></i></button>
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

export default Match