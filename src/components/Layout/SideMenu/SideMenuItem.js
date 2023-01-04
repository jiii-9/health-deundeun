import React from "react";

import classes from "./SideMenuItem.module.css";

const SideMenuItem = ({ children }) => {
  return <li className={classes["category-item"]}>{children}</li>;
};

export default SideMenuItem;
