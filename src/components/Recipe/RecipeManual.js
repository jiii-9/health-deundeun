import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../UI/BackButton";
import HeartButton from "../UI/HeartButton";

import classes from "./RecipeManual.module.css";

const RecipeManual = () => {
  const { state } = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  const clickHeartHandler = () => {
    setIsClicked(!isClicked);
  };

  console.log(state.recipes);

  return (
    <div className={classes.recipe}>
      <div className="inner">
        <BackButton>
          <h2 className={classes["menu-name"]}>{state.name}</h2>
        </BackButton>

        <HeartButton
          className={
            isClicked ? classes["active-heart"] : classes["heart-icon"]
          }
          isClicked={isClicked}
          onClick={clickHeartHandler}
        />

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
        </div>
      </div>
    </div>
  );
};

export default RecipeManual;
