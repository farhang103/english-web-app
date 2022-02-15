import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="text-black text-lg flex items-start justify-center flex-col border-2 border-black rounded-3xl w-80">
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">Grammer</Link>
      </div>
      <div className="p-5 border-b-black w-full border-b-2 ">
        <Link to="/">Vocabulary</Link>
      </div>
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">Story</Link>
      </div>
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">Idioms & Expressions</Link>
      </div>
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">Games & Tests</Link>
      </div>
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">General Knowledge</Link>
      </div>
      <div className="p-5 border-b-black border-b-2 w-full">
        <Link to="/">Music & Video</Link>
      </div>
    </div>
  );
};

export default SideBar;
