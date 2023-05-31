import React from 'react'
import { Link } from "react-router-dom"

import "../styles/Auth.css";

export default function Register() {
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
                    <div className="col p-4 d-flex flex-column justify-content-center m-0 py-5">
                        <h1 className="text-center">Let's Get Started!</h1>
                        <p className="text-center text-secondary">
                            Create new account to access all features
                        </p>
                        <div className="row m-0 p-0 justify-content-start justify-content-md-center">
                            <div className="col col-md-8">
                                <hr />
                                <form action="/" method="get">
                                    <div className="mb-3">
                                        <label for="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">
                                            E-mail Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter email address"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="phoneNumber" className="form-label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="08xxxxxxxxxx"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="createNewPassword" className="form-label">
                                            Create New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="createNewPassword"
                                            name="createNewPassword"
                                            placeholder="Create New Password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label for="newPassword" className="form-label">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="newPassword"
                                            name="newPassword"
                                            placeholder="New Password"
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="terms-conditions"
                                            name="terms-conditions"
                                        />
                                        <label className="form-check-label" for="terms-conditions">
                                            I agree to terms & conditions
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className="btn"
                                            style={{ backgroundColor: "#efc81a", color: "white" }}
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p className="text-center mt-3">
                            Already have account?
                            <Link
                                to="/login"
                                className="text-decoration-none"
                                style={{ color: "#efc81a" }}
                            >
                                {" "}
                                Log in Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* end of content */}
        </>

    )
}
