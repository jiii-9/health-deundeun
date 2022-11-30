import React, { Fragment } from "react";

import classes from "./RecipeItem.module.css";

const RecipeItem = props => {
  return (
    <Fragment>
      <li className={classes["recipe-item"]}>
        <img className={classes["recipe-image"]} src={`${props.mainImage}`} />
        <span className={classes["recipe-name"]}>{props.name}</span>
      </li>
    </Fragment>
  );
};

export default RecipeItem;
