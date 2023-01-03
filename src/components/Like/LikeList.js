import React from "react";
import { useSelector } from "react-redux";

import LikeItem from "./LikeItem";

import classes from "./LikeList.module.css";

const LikeList = () => {
  let state = useSelector(state => state);
  const likeList = state.like;

  if (likeList.length === 0) {
    return (
      <span className={classes["like-none"]}>좋아요 내역이 없습니다.</span>
    );
  }

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
