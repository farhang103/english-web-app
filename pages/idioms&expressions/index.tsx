import React from "react";
import BlankPage from "../../components/BlankPage";

const index = () => {
  const list = [
    "Body Idioms",
    "Fruit Idioms",
    "Color Idioms",
    "Weather Idioms",
  ];
  return <BlankPage route={list}></BlankPage>;
};

export default index;
