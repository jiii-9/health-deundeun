import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideMenu from "./SideMenu/SideMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.svg";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate("/", { replace: true });
  };

  const sideMenuHandler = () => {
    setIsOpen(isOpen => !isOpen);
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
        <div className={classes.menu}>
          <FontAwesomeIcon
            className={classes["menu-icon"]}
            onClick={sideMenuHandler}
            icon={faBars}
          />
        </div>

        {isOpen ? <SideMenu isOpen={isOpen} onFlip={sideMenuHandler} /> : null}
      </div>
    </header>
  );
};

export default MainHeader;
