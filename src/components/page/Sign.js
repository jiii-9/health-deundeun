import React, { Fragment } from "react";
import LoginForm from "../Login/LoginForm";
import Signup from "../Login/Signup";
import SocialLogin from "../Login/SocialLogin";

const Sign = () => {
  return (
    <Fragment>
      <div className="inner">
        <LoginForm />
        <SocialLogin />
        <Signup />
      </div>
    </Fragment>
  );
};

export default Sign;
