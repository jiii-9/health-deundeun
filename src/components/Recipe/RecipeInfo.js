import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import classes from "./RecipeInfo.module.css";
import BackButton from "../UI/BackButton";

const RecipeManual = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const goBackHandler = () => {
    navigate(-1);
  };

  console.log(state.recipes);

  return (
    <div className={classes.recipe}>
      <BackButton onClick={goBackHandler}>
        <FontAwesomeIcon className={classes["back-icon"]} icon={faAngleLeft} />
        <h2 className={classes["menu-name"]}>{state.name}</h2>
      </BackButton>
      <div className={classes["recipe-wrapper"]}>
        <h3 className={classes["menu-material-title"]}>재료</h3>
        <span className={classes["menu-material"]}>{state.ingredient}</span>
        {state.recipes.map((recipe, idx) => (
          <div className={classes["menu-item"]} key={idx}>
            {recipe.recipeImage !== "" && (
              <img
                className={classes["recipe-image"]}
                src={recipe.recipeImage}
                alt="재료 사진"
              />
            )}
            {recipe.recipeDes !== "" && (
              <span className={classes["recipe-des"]}>{recipe.recipeDes}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeManual;
