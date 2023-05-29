import React from 'react'

import '../styles/Detail.css'

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Detail() {
    return (
        <>
            <Navbar />
            {/* start of content */}
            <section id="content">
                <div className="container">
                    <h1 className="text-center text-primary">Loream Sandwich</h1>
                    <div className="d-flex justify-content-center">
                        <img src="/images/detail-photo.png" className="main-image" />
                    </div>
                    <div className="row mt-5">
                        <div className="col offset-md-2">
                            <h2>Ingredients</h2>
                            <ul>
                                <li>2 eggs </li>
                                <li>2 tbsp mayonnaise</li>
                                <li>3 slices bread</li>
                                <li>a little butter</li>
                                <li>⅓ carton of cress</li>
                                <li>
                                    2-3 slices of tomato or a lettuce leaf and a slice of ham or
                                    cheese
                                </li>
                                <li>crisps, to serve</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col offset-md-2">
                            <h2>Video Step</h2>
                            <div className="btn video-button btn-warning">Step 1</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col offset-md-2">
                            <div className="btn video-button btn-warning">Step 2</div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="row mt-5">
                            <div className="col offset-md-2">
                                <textarea
                                    className="form-control"
                                    aria-label="With textarea"
                                    placeholder="Comment"
                                    style={{ height: 200 }}
                                    defaultValue={""}
                                />
                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn btn-warning">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of content */}
            <Footer />
        </>

    )
}
