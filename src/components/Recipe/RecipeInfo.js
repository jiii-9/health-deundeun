import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./RecipeInfo.module.css";

const RecipeManual = () => {
  const { state } = useLocation();

  console.log(state);
  console.log(state.recipes);

  return (
    <div className={classes.recipe}>
      <h2 className={classes["menu-name"]}>{state.name}</h2>
      <span className={classes["menu-material"]}>재료: {state.ingredient}</span>
      {state.recipes.map((recipe, idx) => (
        <div key={idx}>
          <img
            className={classes["recipe-image"]}
            src={recipe.recipeImage}
            alt="재료 사진1"
          />
          <span className={classes["recipe-des"]}>{recipe.recipeDes}</span>
        </div>
      ))}
    </div>
  );
};

export default RecipeManual;
