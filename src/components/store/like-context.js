import React from "react";

const LikeContext = React.createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
});

export default LikeContext;
