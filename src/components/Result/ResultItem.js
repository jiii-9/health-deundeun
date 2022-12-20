import React, { useState } from "react";
import HeartButton from "../UI/HeartButton";

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
  const nutrientList = [
    {
      nutrientName: "열량",
      nutrientMark: kcal,
    },
    {
      nutrientName: "탄수화물",
      nutrientMark: carbohydrate,
    },
    {
      nutrientName: "단백질",
      nutrientMark: protein,
    },
    {
      nutrientName: "지방",
      nutrientMark: fat,
    },
    {
      nutrientName: "당류",
      nutrientMark: sugars,
    },
    {
      nutrientName: "나트륨",
      nutrientMark: sodium,
    },
    {
      nutrientName: "콜레스테롤",
      nutrientMark: cholesterol,
    },
    {
      nutrientName: "트렌스지방",
      nutrientMark: transFat,
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  const clickHeartHandler = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <div className={classes["result-item"]}>
      <div className={classes.wrapper}>
        <span className={classes["food-name"]}>{name}</span>
        <HeartButton
          className={
            isClicked ? classes["active-heart"] : classes["heart-icon"]
          }
          isClicked={isClicked}
          onClick={clickHeartHandler}
        />
      </div>
      <div className={classes["result-info"]}>
        {nutrientList.map((nutrientItem, idx) => (
          <div className={classes["item-info"]} key={idx}>
            <span className={classes["nutrient-name"]}>
              {nutrientItem.nutrientName}
            </span>
            <span className={classes.amount}>{nutrientItem.nutrientMark}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultItem;
