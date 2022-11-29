import React from "react";

import classes from "./Recipe.module.css";
import RecipeItem from "./RecipeItem";

const Recipe = props => {
  return (
    <section className={classes.recipe}>
      <span className={classes["recipe-title"]}>인기있는 레시피</span>
      <ul className={classes["recipe-list"]}>
        <RecipeItem />
      </ul>
    </section>
  );
};

export default Recipe;
