import React, { Fragment } from "react";

import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <Fragment>
      <button className={classes["signup-btn"]}>회원가입</button>
    </Fragment>
  );
};

export default Signup;
