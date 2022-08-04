import React from "react";
import BlankPage from "../../components/BlankPage";

const index = () => {
  let list = [
    "Beginner",
    "Pre-Intermidiate",
    "Intermediate",
    "Upper-Intermediate",
    "Advanced",
  ];
  return <BlankPage route={list}></BlankPage>;
};

export default index;
