import React from 'react'

import "../styles/Home.css";

// import component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeCard from "../components/RecipeCard";

import recipeList from "../menu.json";

export default function Home() {
    return (
        <>
            {/* start of header */}
            <Navbar />
            <div className="bg-yellow" style={{ zIndex: -1 }} />
            <div className="container hero">
                <div
                    className="row align-item-center flex-column-reverse gap-5 flex-lg-row py-5"
                    style={{ height: "90vh" }}
                >
                    <div className="hero-col col-md-7 col-xs-12 order-2 order-md-1 hero-left">
                        <h1 className="hero-text">
                            Discover Recipe <br />
                            &amp; Delicious Food
                        </h1>
                        <div className="mb-3 w-50 mt-3">
                            <input
                                className="form-control form-control-lg"
                                style={{ background: "#EFEFEF", borderRadius: 15 }}
                                placeholder="search restaurant, food"
                            />
                        </div>
                    </div>
                    <div className="col-md-auto" />
                    <div className="col-md-5 hero">
                        <img src="/images/hero.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
            {/* end of header */}
            {/* start of popular for you */}
            <section className="main-section-recipe popular-for-you">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-3 popular-recipe-text-box">
                            <h3>Popular For You !</h3>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="/images/popular-for-you.png" alt="Popular Image" />
                        </div>
                        <div className="col-md-5 align-self-center justify-content-between">
                            <h4>Healthy Bone Broth Ramen (Quick &amp; Easy)</h4>
                            <hr style={{ width: "10vh" }} />
                            <p>
                                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                                hurry? That`s right!
                            </p>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of popular for you */}
            <section className="main-section-recipe">
                <div className="container position-relative">
                    <div className="row mb-5">
                        <div className="col-md-3 popular-recipe-text-box">
                            <h3>New Recipe</h3>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="new-recipe-box" />
                            <img src="/images/new-recipe.png" alt="Popular Image" />
                        </div>
                        <div className="col-md-5 justify-content-between">
                            <h4>Healthy Bone Broth Ramen (Quick &amp; Easy)</h4>
                            <hr style={{ width: "10vh" }} />
                            <p>
                                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
                                hurry? That`s right!
                            </p>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of new recipe */}
            {/* start of popular recipe */}
            <section id="popular-recipe">
                <div className="container">
                    <div className="col-md-3 popular-recipe-text-box">
                        <h3>Popular Recipes</h3>
                    </div>
                    <div className="row">
                        {recipeList.menu.map((item) => (
                            <RecipeCard title={item?.title} image={item?.image} />
                        ))}
                    </div>
                </div>
            </section>
            {/* end of popular recipe */}
            <Footer />
        </>

    )
}
