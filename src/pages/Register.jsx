import React from 'react'

import "../styles/Auth.css";

export default function Register() {
    return (
        <>
            {/* start of content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="logo-container">
                            <img
                                src="/images/auth-logo.png"
                                style={{ width: "10vh", height: "14vh" }}
                                alt="Logo"
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="/images/auth-side-bg.png"
                                style={{ width: "100%", height: "100vh" }}
                                alt="Background"
                            />
                        </div>
                        <div className="overlay-box" />
                    </div>
                    <div className="col-md-4 col-xs-10">
                        <div className="container auth-form" style={{ top: "5% !important" }}>
                            <h1 className="text-center text-warning">Let’s Get Started !</h1>
                            <p className="text-center text-muted">
                                Create new account to access all features
                            </p>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="inputName"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="inputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPhone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="inputPhone"
                                        placeholder="08xxxxxxxx"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">
                                        Create New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        id="inputPassword"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPassword2" className="form-label">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        id="inputPassword2"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        I agree to terms &amp; conditions
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn width-100 btn-lg">
                                        Register Account
                                    </button>
                                </div>
                            </form>
                            <hr />
                            <small className="d-block text-center text-muted">
                                Already have account?
                                <a className="text-warning text-decoration-none" href="/login">
                                    {" "}
                                    Log in Here
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of content */}
        </>

    )
}
