import React from "react";

import classes from "./BackButton.module.css";

const BackButton = props => {
  return (
    <div onClick={props.onClick} className={classes.back}>
      {props.children}
    </div>
  );
};

export default BackButton;
