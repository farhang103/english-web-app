import { useRouter } from "next/router";
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
  const router = useRouter();
  console.log(router.asPath);
  return <BlankPage route={list}></BlankPage>;
};

export default index;
