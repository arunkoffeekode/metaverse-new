import React from 'react'
import Header from './Header/Header'
function Login() {
    return (
        <div>

            <section className='login'>
                <Header className="he"></Header>
                <div className='login-bg'></div>
                <div className='container'>
                    <div className='row justify' style={{ alignItems: 'center' }}>
                        <div className='col-lg-5 col-md-7 col-sm-12 col-xl-5'>
                            <div className='top-title top-mt'>
                                <h2>Enter your new Dating world</h2>
                            </div>
                            <div className='login-box'>
                                <div className='form-section'>
                                    <form >
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <input type="text" name="name" class="form-control" id="inputName" placeholder='Enter Your Email ID / Username' />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="password" name="name" class="form-control" id="inputName" placeholder='Password' />
                                            </div>
                                            <div class="form-group text-center col-md-12">
                                                <a href='#' className='forgot'>Forget Password?</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className='sign-btn-section'>
                                <button type='button' className='sign'>Sign in</button>
                            </div>
                            <div className='act'>
                                <div className='act-btn'>Don't have a Account? <a href='#'>Sign up Now</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login