import React from 'react'

import '../styles/Detail.css'
import { useLocation } from "react-router";

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import axios from 'axios';

import recipeList from "../menu.json";


export default function Detail() {
    const location = useLocation();
    const [currentRecipe, setCurrentRecipe] = React.useState(null);

    React.useEffect(() => {
        const currentSlug = location?.pathname?.split("/")[2];

        window.scrollTo(0, 0);

        // set current recipe using axios
        axios.get(`${process.env.REACT_APP_BASE_URL}/recipe/detail/${currentSlug}`).then((result) => {
            setCurrentRecipe(result.data?.data[0]);
        });
    }, []);

    const RecipeIngredients = () => {
        const ingredientsResponse = currentRecipe?.ingredients;
        const lines = ingredientsResponse ? ingredientsResponse.split("-").slice(1) : [];

        return (
            <div>
                <ul>
                    {lines.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        );

    };

    const VideoEmbed = () => {
        const videoResponse = currentRecipe?.video_link;

        const videoId = videoResponse ? videoResponse.split("v=")[1] : "";

        return (
            <div className="row mt-5">
                <div className="col offset-md-2">
                    <h2>Video Step</h2>
                    <div className="btn video-button btn-warning">
                        <iframe
                            width="100%"
                            height="auto"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <>
            <Navbar />
            {/* start of content */}
            <section id="content">
                <div className="container">
                    <h1 className="text-center text-primary">{currentRecipe?.title}</h1>
                    <div className="d-flex justify-content-center">
                        <img src={`${currentRecipe?.recipe_picture}`} className="main-image" />
                    </div>
                    <div className="row mt-5">
                        <div className="col offset-md-2">
                            <h2>Ingredients</h2>
                            <RecipeIngredients />
                        </div>
                    </div>
                    <VideoEmbed />
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
