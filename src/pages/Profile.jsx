import React from 'react'
import { Link } from 'react-router-dom'

// import styles
import '../styles/Profile.css'

// import components
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RecipeCard from "../components/RecipeCard";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
    const navigate = useNavigate();
    const [profile, setProfile] = React.useState(null)
    const [recipeList, setRecipeList] = React.useState([]);

    React.useEffect(() => {
        if (!localStorage.getItem("auth")) {
            navigate("/login");
        }
    }, []);

    // Set user profile data from local storage
    React.useEffect(() => {
        const profileData = {
            fullname: localStorage.getItem("userFullName"),
            profile_picture: localStorage.getItem("userProfilePicture"),
        };

        // Check if profile data is empty and use axios instead
        if (!profileData.fullname && !profileData.profile_picture) {
            console.log(profileData.fullname, profileData.profile_picture);
            axios.get(`${process.env.REACT_APP_BASE_URL}profile`).then((result) => {
                setProfile(result.data?.data[0]);
            });
        } else {
            setProfile(profileData);
        }

        axios
            .get(`${process.env.REACT_APP_BASE_URL}recipe/user/${localStorage.getItem("userId")}`)
            .then((result) => {
                setRecipeList(result?.data?.data);
            });

    }, [localStorage.getItem("userFullName"), localStorage.getItem("userProfilePicture")]);



    return (
        <>
            <Navbar />
            {/* start of user profile */}
            <div className="container mb-4">
                <div className="d-flex justify-content-center mt-2">
                    <img
                        src={profile?.profile_picture}
                        className="rounded-circle"
                        alt="Cinque Terre"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <h3 className="text-center text-primary">{profile?.fullname}</h3>
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
                                        <Link className="text-primary fw-bold" to="#">
                                            My Recipes
                                        </Link>
                                        {/* <Link
                                            className="text-primary fw-bold text-decoration-none mx-4"
                                            to="#"
                                        >
                                            Saved Recipes
                                        </Link>
                                        <Link
                                            className="text-primary fw-bold text-decoration-none"
                                            to="#"
                                        >
                                            Liked Recipes
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
    
                                <div className="container">
                                    <div className="row">
                                        {recipeList?.length > 0 ? (
                                            recipeList?.map((item) => (
                                                <RecipeCard title={item?.title} image={item?.recipe_picture} key={item?.id} />
                                            ))
                                        ) : (
                                            <div className="col-12 text-center">
                                                <p>No recipes to display.</p>
                                            </div>
                                        )}
                                    </div>
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
