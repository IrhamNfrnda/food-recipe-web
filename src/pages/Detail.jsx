import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";
import axios from 'axios';
import Swal from "sweetalert2";

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Comments from '../components/Comments'

import '../styles/Detail.css'

export default function Detail() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const currentSlug = location?.pathname?.split("/")[2];

        window.scrollTo(0, 0);

        // Fetch current recipe using axios
        axios.get(`${process.env.REACT_APP_BASE_URL}recipe/detail/${currentSlug}`)
            .then((result) => {
                setCurrentRecipe(result.data?.data);
                setComments(result.data?.data?.comments)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
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
                            height="100%"
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


    const handlePostComment = () => {
        const userId = localStorage.getItem('userId');
        const recipeId = currentRecipe?.id;

        if (!userId) {
            Swal.fire({
                title: "Failed",
                text: "Please login first to comment",
                icon: "error",
            })
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}recipe/comment`, {
            userId: userId,
            recipeId: recipeId,
            comment: comment,
        })
            .then((response) => {
                const fullname = localStorage.getItem('userFullName');
                const profile_picture = localStorage.getItem('userProfilePicture');

                const newComment = {
                    id: response?.data?.data?.id,
                    id_user: userId,
                    id_recipe: recipeId,
                    comment: comment,
                    fullname: fullname,
                    profile_picture: profile_picture,
                };

                setComments(prevComments => [...prevComments, newComment]);
                setComment('');
            })
            .catch((error) => {
                Swal.fire({
                    title: "Failed",
                    text: "Error posting comment",
                    icon: "error",
                })
            });
    }


    return (
        <>
            <Navbar />
            {
                isLoading ? (
                    <section id="content">
                        <div className="container">
                            <h1 className="text-center text-primary">&nbsp;</h1>
                            <div className="d-flex justify-content-center">
                                <img src="&nbsp;" className="main-image" alt="Loading" />
                            </div>
                            <div className="row mt-5">
                                <div className="col offset-md-2">
                                    <h2>&nbsp;</h2>
                                    <RecipeIngredients />
                                </div>
                            </div>
                            <VideoEmbed />
                            <Comments comments={comments} />
                            <div className="row mt-3">
                                <div className="col offset-md-2">
                                    <textarea
                                        className="form-control"
                                        aria-label="With textarea"
                                        placeholder="Comment"
                                        style={{ height: 200 }}
                                        defaultValue={""}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <div className="mt-3 d-flex justify-content-center">
                                        <button className="btn btn-warning" disabled>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
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
                            <Comments comments={comments} />
                            <div className="row mt-3">
                                <div className="col offset-md-2">
                                    <textarea
                                        className="form-control"
                                        aria-label="With textarea"
                                        placeholder="Comment"
                                        style={{ height: 200 }}
                                        defaultValue={""}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <div className="mt-3 d-flex justify-content-center">
                                        <button className="btn btn-warning" onClick={handlePostComment}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            {/* start of content */}

            {/* end of content */}
            <Footer />
        </>

    )
}
