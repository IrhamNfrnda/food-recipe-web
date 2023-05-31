import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  const { title, image } = props;

  return (
    <>
      <div className="col-md-4 col-xs-12 mb-4">
        <Link className="text-decoration-none" to={`/detail/${title?.toLowerCase()?.split(" ")?.join("-")}`}>
          <div
            className="popular-recipe-image"
            style={{
              backgroundImage: `url('/images/${image}')`,
            }}
          >
            <h4 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
              {title}
            </h4>
          </div>
        </Link>
      </div>
    </>
  );
}