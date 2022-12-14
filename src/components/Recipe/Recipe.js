import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../../App";

import classes from "./Recipe.module.css";
import RecipeItem from "./RecipeItem";

const Recipe = () => {
  const navigate = useNavigate();
  const recipeCtx = useContext(RecipeContext);
  const recipes = recipeCtx.recipeData;

  return (
    <section className={classes.recipe}>
      <div className="inner">
        <span className={classes["recipe-title"]}>인기있는 레시피</span>

        <ul className={classes["recipe-list"]}>
          {recipes.map(recipe => (
            <RecipeItem
              key={recipe.id}
              onClick={() => {
                navigate(
                  `/recipe/recipe-info/${recipe.name}`,
                  {
                    state: {
                      id: recipe.id,
                      name: recipe.name,
                      ingredient: recipe.ingredient,
                      recipes: recipe.recipes,
                    },
                  },
                  window.scrollTo({
                    top: 0,
                  })
                );
              }}
            >
              <img
                className={classes["recipe-image"]}
                src={`${recipe.mainImage}`}
                alt="레시피 대표이미지"
              />
              <span className={classes["recipe-name"]}>{recipe.name}</span>
            </RecipeItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Recipe;
