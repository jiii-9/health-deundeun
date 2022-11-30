import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes["navigation-list"]}>
        <li className={classes["navigation-item"]}>
          <FontAwesomeIcon
            className={classes["navigation-icon"]}
            icon={faBars}
          />
        </li>
        <li className={classes["navigation-item"]}>
          <FontAwesomeIcon
            className={classes["navigation-icon"]}
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
      </ul>
    </nav>
  );
};

export default Navigation;
