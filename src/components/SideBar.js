import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const deactive =
    "flex w-full content-center justify-center border-b-black p-5 hover:text-white hover:bg-gray-700";
  const active =
    "flex w-full content-center justify-center p-5 text-white bg-gray-800";
  return (
    <div className="fixed top-28 mt-2 ml-10 flex w-72 flex-col items-center overflow-hidden rounded-3xl border-2 border-black text-2xl text-black">
      <NavLink
        to="/grammer"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Grammer
      </NavLink>

      <NavLink
        to="/vocabulary"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Vocabulary
      </NavLink>

      <NavLink
        to="/story"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Story
      </NavLink>

      <NavLink
        to="/idioms&expressions"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Idioms & Expressions
      </NavLink>

      <NavLink
        to="/games&tests"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Games & Tests
      </NavLink>

      <NavLink
        to="/general&knowledge"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        General Knowledge
      </NavLink>

      <NavLink
        to="/music&video"
        className={({ isActive }) => (isActive ? active : deactive)}
      >
        Music & Video
      </NavLink>
    </div>
  );
};

export default SideBar;
