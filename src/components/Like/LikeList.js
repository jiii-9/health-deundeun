import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LikeItem from "./LikeItem";

import classes from "./LikeList.module.css";

const LikeList = () => {
  const navigate = useNavigate();
  let state = useSelector(state => state);
  const likeList = state.like;

  const goHomeHandler = () => {
    navigate("/", { replace: true });
  };

  if (likeList.length === 0) {
    return (
      <div className={classes["none-wrapper"]}>
        <span className={classes["like-none"]}>좋아요 내역이 없습니다.</span>
        <button className={classes["return-btn"]} onClick={goHomeHandler}>
          돌아가기
        </button>
      </div>
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
