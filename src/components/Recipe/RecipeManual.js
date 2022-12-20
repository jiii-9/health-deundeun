import React from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../UI/BackButton";
import HeartButton from "../UI/HeartButton";

import classes from "./RecipeManual.module.css";

const RecipeManual = () => {
  const { state } = useLocation();

  console.log(state.recipes);

  return (
    <div className={classes.recipe}>
      <div className="inner">
        <BackButton>
          <h2 className={classes["menu-name"]}>{state.name}</h2>
        </BackButton>

        <div className={classes["recipe-wrapper"]}>
          <div className={classes["menu-material-wrapper"]}>
            <h3 className={classes["menu-material-title"]}>재료</h3>
            <span className={classes["menu-material"]}>{state.ingredient}</span>
          </div>
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
                <span className={classes["recipe-des"]}>
                  {recipe.recipeDes}
                </span>
              )}
            </div>
          ))}
          <HeartButton className={classes["heart-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default RecipeManual;
