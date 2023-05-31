import React from 'react'
import { Link } from "react-router-dom"

import "../styles/Auth.css";

export default function Login() {
    return (
        <>
            {/* start of content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0 left-side">
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
                    <div className="col p-4 d-flex flex-column justify-content-center m-0">
                        <h1 className="text-center">Welcome</h1>
                        <p className="text-center text-secondary">
                            Log in into your exiting account
                        </p>
                        <div className="row m-0 p-0 justify-content-start justify-content-md-center">
                            <div className="col col-md-8">
                                <hr />
                                <form action="/" method="get">
                                    <div className="mb-3">
                                        <label for="email" className="form-label">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="E-mail"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="termsConditions"
                                            name="termsConditions"
                                        />
                                        <label className="form-check-label" for="termsConditions">
                                            I agree to terms & conditions
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn"
                                            style={{ backgroundColor: "#efc81a", color: "white" }}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p className="text-center mt-5">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="text-decoration-none"
                                style={{ color: "#efc81a" }}
                            >
                                {" "}
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* end of content */}
        </>

    )
}
