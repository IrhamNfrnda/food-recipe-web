import React from 'react'

import '../styles/AddRecipe.css'

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function AddRecipe() {
    return (
        <>
            <Navbar />
            {/* start of content */}
            <section id="content">
                <div className="container">
                    <div className="input-group mb-3 mt-3">
                        <input
                            className="form-control h-20"
                            type="file"
                            id="formFileDisabled"
                            placeholder="Comment"
                            style={{ height: 200 }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Title"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            style={{ height: 200 }}
                            id="exampleFormControlTextarea1"
                            placeholder="Ingredients"
                            defaultValue={""}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Video"
                        />
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button className="btn btn-warning" style={{ width: "30%" }}>
                            Post
                        </button>
                    </div>
                </div>
            </section>
            {/* end of content */}
            <Footer />  
        </>

    )
}
