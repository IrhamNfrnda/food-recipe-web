import React from 'react'

import "../styles/Auth.css";

export default function Login() {
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
                        <div className="container auth-form">
                            <h1 className="text-center text-warning">Welcome</h1>
                            <p className="text-center text-muted">
                                Log in into your exiting account
                            </p>
                            <hr />
                            <form action="/">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        id="exampleInputPassword1"
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
                                        Log in
                                    </button>
                                </div>
                            </form>
                            <hr />
                            <small className="d-block text-center text-muted">
                                Don’t have an account?
                                <a
                                    className="text-warning text-decoration-none"
                                    href="/register"
                                >
                                    Sign Up
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
