import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const HeartButton = props => {
  return (
    <FontAwesomeIcon
      className={props.className}
      icon={props.isClicked ? solidHeart : regularHeart}
      onClick={props.onClick}
    />
  );
};

export default HeartButton;
