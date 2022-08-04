import React from "react";
import BlankPage from "../../../components/BlankPage";

const index = () => {
  const list = [
    "Ear",
    "Hand",
    "Leg",
    "Foot",
    "Nose",
    "Eyes",
    "Head",
    "Hair",
    "Arm",
    "Neck",
    "Shoulder",
    "Lip",
    "Tooth",
    "Mouth",
    "Tongue",
    "Stomach",
    "Hearth",
    "Chest",
    "Face",
    "Others",
  ];
  return <BlankPage route={list}></BlankPage>;
};

export default index;
