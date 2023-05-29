import React from 'react'

// import styles
import '../styles/Profile.css'

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Profile() {
    return (
        <>
            <Navbar />
            {/* start of user profile */}
            <div className="container mb-4">
                <div className="d-flex justify-content-center mt-2">
                    <img
                        src="/images/profile.png"
                        className="rounded-circle"
                        alt="Cinque Terre"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <h3 className="text-center text-primary">Garneta Sharina</h3>
                </div>
            </div>
            {/* end of user profile  */}
            {/* start of recipes */}
            <header>
                <section id="popular-recipe">
                    <div className="container d-flex bd-highlight mb-3">
                        <div className="menu-recipes mt-4">
                            <div className="row animate__animated animate__fadeInDown mb-4">
                                <div className="col-12">
                                    <div>
                                        <a className="text-primary fw-bold" href="#">
                                            My Recipes
                                        </a>
                                        <a
                                            className="text-primary fw-bold text-decoration-none mx-4"
                                            href="#"
                                        >
                                            Saved Recipes
                                        </a>
                                        <a
                                            className="text-primary fw-bold text-decoration-none"
                                            href="#"
                                        >
                                            Liked Recipes
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <a
                                    className="popular-recipe-image  mb-1 col-sm-2 col-md-2 d-flex align-items-end text-decoration-none text-white"
                                    style={{
                                        backgroundImage: "url(/images/bomb-chicken.png)"
                                    }}
                                    href="./detail-recipe.html"
                                >
                                    <p className="fs-3 fw-medium">Bomb Chicken</p>
                                </a>
                                <a
                                    className="popular-recipe-image mb-1 col-sm-2 col-md-2 d-flex align-items-end text-decoration-none text-white"
                                    style={{
                                        backgroundImage: "url(/images/banana-pancake.png)"
                                    }}
                                    href="./detail-recipe.html"
                                >
                                    <p className="fs-3 fw-medium">Banana Pancake</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            {/* end of recipes */}
            <Footer />
        </>
    )
}
