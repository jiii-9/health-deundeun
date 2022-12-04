import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/", { replace: true });
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <nav className={classes.navigation}>
      <ul className={classes["navigation-list"]}>
        <li className={classes["navigation-item"]}>
          <FontAwesomeIcon
            className={classes["navigation-icon"]}
            onClick={goHomeHandler}
            icon={faHouse}
          />
        </li>
        <li className={classes["navigation-item"]}>
          <FontAwesomeIcon
            className={classes["navigation-icon"]}
            icon={faHeart}
          />
        </li>
        <li className={classes["navigation-item"]}>
          <span className={classes["navigation-icon"]}></span>
        </li>
        <li className={classes["navigation-item"]}>
          <FontAwesomeIcon
            className={classes["navigation-icon"]}
            icon={faUser}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
