import React, { Fragment } from "react";
import BackButton from "../UI/BackButton";

import classes from "./LoginForm.module.css";

const Login = () => {
  return (
    <Fragment>
      <section className={classes.login}>
        <BackButton />
        <h2 className={classes["login-title"]}>로그인</h2>
      </section>

      <section className={classes["login-form"]}>
        <form>
          <input
            id="email"
            className={classes["login-email"]}
            type="email"
            placeholder="아이디 또는 이메일주소"
          />
          <input
            id="password"
            className={classes["login-password"]}
            type="password"
            placeholder="비밀번호(영문+숫자 6~16자)"
          />
          <button className={classes["login-btn"]}>로그인</button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
