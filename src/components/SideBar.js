import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="row-span-2 ml-4 flex w-72 flex-col items-center rounded-3xl border-2 border-black text-xl text-black">
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">Grammer</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">Vocabulary</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">Story</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">Idioms & Expressions</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">Games & Tests</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/">General Knowledge</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 p-5">
        <Link to="/">Music & Video</Link>
      </div>
    </div>
  );
};

export default SideBar;
