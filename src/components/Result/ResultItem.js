import React from "react";

import classes from "./ResultItem.module.css";

const ResultItem = ({
  name,
  kcal,
  carbohydrate,
  protein,
  fat,
  sugars,
  sodium,
  cholesterol,
  transFat,
}) => {
  return (
    <div className={classes["result-item"]}>
      <span className={classes["food-name"]}>{name}</span>
      <div className={classes["result-info"]}>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>열량</span>
          <span className={classes.amount}>{kcal}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>탄수화물</span>
          <span className={classes.amount}>{carbohydrate}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>단백질</span>
          <span className={classes.amount}>{protein}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>지방</span>
          <span className={classes.amount}>{fat}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>당류</span>
          <span className={classes.amount}>{sugars}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>나트륨</span>
          <span className={classes.amount}>{sodium}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>콜레스테롤</span>
          <span className={classes.amount}>{cholesterol}</span>
        </div>
        <div className={classes["item-info"]}>
          <span className={classes["nutrient-name"]}>트렌스지방</span>
          <span className={classes.amount}>{transFat}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
