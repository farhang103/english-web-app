import React from "react";
import Post from "./Post";

import image from "../blog-image.jpg";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to="/post">
        <div className="h-96 w-72 cursor-pointer overflow-hidden rounded-lg border-2 border-black">
          <div>
            <img src={image} alt="" />
          </div>
          <p className="p-4 text-base tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            itaque molestiae blanditiis vel Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laborum itaque molestiae
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Posts;
