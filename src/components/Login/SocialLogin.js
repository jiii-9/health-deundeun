import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import classes from "./SocialLogin.module.css";

const SocialLogin = () => {
  return (
    <section className={classes.social}>
      <button className={classes["social-kakao"]}>
        <FontAwesomeIcon className={classes["social-icon"]} icon={faComment} />
        카카오로 시작하기
      </button>
      <button className={classes["social-google"]}>
        <FontAwesomeIcon className={classes["social-icon"]} icon={faGoogle} />
        구글로 시작하기
      </button>
    </section>
  );
};

export default SocialLogin;
