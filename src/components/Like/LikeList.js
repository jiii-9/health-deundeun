import React from "react";
import { useSelector } from "react-redux";

import LikeItem from "./LikeItem";

import classes from "./LikeList.module.css";

const LikeList = () => {
  let state = useSelector(state => state);
  const likeList = state.like;

  return (
    <section className={classes["like-list"]}>
      {likeList.map(item => (
        <LikeItem
          key={item.id}
          id={item.id}
          name={item.name}
          nutrient={item.nutrientList}
        />
      ))}
    </section>
  );
};

export default LikeList;
