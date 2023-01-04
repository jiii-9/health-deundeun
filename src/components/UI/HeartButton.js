import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import classes from "./HeartButton.module.css";

const HeartButton = ({ className, isClicked }) => {
  return (
    <FontAwesomeIcon
      id={classes["heart-icon"]}
      className={className}
      icon={isClicked ? solidHeart : regularHeart}
    />
  );
};

export default HeartButton;
