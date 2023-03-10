import React from 'react'

function About() {
    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                            <div className='about-section'>
                                <div className='about-details'>
                                    <div className='about-title'>
                                        <h6>About me </h6>
                                    </div>
                                    <div className='about-box'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Mi mollis nec arcu nisl. Odio rutrum urna id quis tortor id at. Ipsum morbi justo volutpat pellentesque sed. Viverra nam dictumst arcu id sit condimentum viverra. Viverra purus in nisi nullam pellentesque ornare leo cursus. Dictumst enim viverra egestas tortor senectus in risus. </p>
                                    </div>
                                </div>
                                <div className='about-details'>
                                    <div className='about-title-1'>
                                        <h6>your profile completed  </h6>
                                    </div>
                                    <div className='about-box'>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='about-details'>
                                    <div className='about-title-2 p-0'>
                                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Basic</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">About me </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">hobbies & interest</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='about-box'>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">..1.</div>
                                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">..2.</div>
                                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">.3..</div>
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

export default About