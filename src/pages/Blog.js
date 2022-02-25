import React from "react";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blankPage">
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-10">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
};

export default Blog;
