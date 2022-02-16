import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-36 left-4 row-span-2 flex w-72 flex-col items-center rounded-3xl border-2 border-black text-xl text-black">
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/grammer">Grammer</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/vocabulary">Vocabulary</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/story">Story</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/idioms&expressions">Idioms & Expressions</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/games&tests">Games & Tests</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 border-b-black p-5">
        <Link to="/general&knowledge">General Knowledge</Link>
      </div>
      <div className="flex w-full content-center justify-center border-b-2 p-5">
        <Link to="/music&video">Music & Video</Link>
      </div>
    </div>
  );
};

export default SideBar;
