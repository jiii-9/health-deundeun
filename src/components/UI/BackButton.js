import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import classes from "./BackButton.module.css";

const BackButton = props => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBackHandler} className={classes.back}>
      <FontAwesomeIcon className={classes["back-icon"]} icon={faAngleLeft} />
      {props.children}
    </button>
  );
};

export default BackButton;
