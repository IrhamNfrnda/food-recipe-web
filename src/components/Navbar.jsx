import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="container mt-5">
                <div className="row nav">
                    <div className="col">
                        <div>
                            <a className="nav-item active" href="/">
                                Home
                            </a>
                            <a className="nav-item" href="/add-recipe">
                                Add Recipe
                            </a>
                            <a className="nav-item" href="/profile">
                                Profile
                            </a>
                        </div>
                    </div>
                    <div className="col-md-auto" />
                    <div className="col-md-1">
                        <div>
                            <a
                                href="/login"
                                className="text-decoration-none nav-item d-flex justify-content-end align-items-center gap-2 d-lg-flex d-none"
                                style={{ color: "#fff" }}
                            >
                                <img
                                    src="/assets/images/ic-user.png"
                                    alt="icon user"
                                    style={{ width: "5vh" }}
                                />
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 d-flex justify-content-end align-items-center hide-desktop">
                <button
                    className="btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <img src="/assets/images/menu.png" width="35px" height="35px" />
                </button>
            </div>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <a className="nav-item fw-bold mb-3 mt-3 text-center" href="/">
                        Home
                    </a>
                    <a
                        className="nav-item fw-bold text-decoration-none mb-3 text-center"
                        href="/add-recipe"
                    >
                        Add Recipe
                    </a>
                    <a
                        className="nav-item fw-bold text-decoration-none mb-3 text-center"
                        href="/profile"
                    >
                        Profile
                    </a>
                    <a
                        className="nav-item fw-bold text-decoration-none mb-3 text-center"
                        href="/login"
                    >
                        Login
                    </a>
                </div>
            </div>
        </>
    )
}
