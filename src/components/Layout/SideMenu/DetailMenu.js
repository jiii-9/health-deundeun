import React from "react";

import classes from "./DetailMenu.module.css";

const DetailMenu = ({ name }) => {
  console.log(name);

  return (
    <ul className={classes.detail}>
      {name.map((item, idx) => (
        <li className={classes["detail-item"]} key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DetailMenu;
