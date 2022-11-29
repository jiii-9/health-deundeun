import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.svg";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <header className={classes["main-header"]}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <img
            className={classes["logo-img"]}
            src={logo}
            alt="logo"
            onClick={logoClickHandler}
          />
        </div>
        <div className={classes.user}>
          <FontAwesomeIcon className={classes["user-icon"]} icon={faUser} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
