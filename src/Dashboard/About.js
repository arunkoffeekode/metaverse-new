import React from 'react'
import avt from '../img/avt.png'
function About() {
    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                        </div>
                        <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                            <div className='about-avt'>
                                <div className='avt-img'>
                                    <img src={avt} alt="" />
                                </div>
                                <div className='avt-details'>
                                    <h3>BP8789</h3>
                                    <p>Surat, Gujarat (India) </p>
                                    <span className='dot'>Online</span>
                                    <h5>Looking For <span>(Male, 20 - 38)</span></h5>
                                </div>
                            </div>
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
                                <div className='about-details mb-0'>
                                    <div className='about-title-2 p-0'>
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Basic</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">About me </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">hobbies & interest</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='about-box'>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <table>
                                                    <tr>
                                                        <td>Gender :</td>
                                                        <td>Female</td>
                                                    </tr>
                                                    <tr>
                                                        <td>age :</td>
                                                        <td>28</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Height :</td>
                                                        <td>163 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight :</td>
                                                        <td>68 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Looking For :</td>
                                                        <td>Male, 20 - 38</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <table>
                                                    <tr>
                                                        <td>Lives in :</td>
                                                        <td>Surat, Gujarat (India)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nationality :</td>
                                                        <td>Indian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Languages spoken :</td>
                                                        <td>English, Hindi, Gujarati</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Marital Status :</td>
                                                        <td>Single</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Occupation :</td>
                                                        <td>Developer</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                <div className='hobies'>
                                                    <ul>
                                                        <li>
                                                            <button className='hobi-btn' type='button'>Arts & Crafts</button>
                                                        </li>
                                                        <li>
                                                            <button className='hobi-btn' type='button'>Entertainment & Fun</button>
                                                        </li>
                                                        <li>
                                                            <button className='hobi-btn' type='button'>Sports</button>
                                                        </li>
                                                        <li>
                                                            <button className='hobi-btn' type='button'>Outdoor Activities</button>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
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