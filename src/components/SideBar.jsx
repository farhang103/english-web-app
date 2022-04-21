import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const deactive =
    "flex w-full content-center justify-center border-b-black p-5 hover:text-white hover:bg-gray-700";
  const active =
    "flex w-full content-center justify-center p-5 text-white bg-gray-800";

  function hasWhiteSpace(s) {
    return s.indexOf(" ") >= 0;
  }

  const spaceChecker = (array) => {
    const space = hasWhiteSpace(array);
    if (!space) return array;
    array = array.replace(/\s/g, "");
    return array;
  };

  const sideBarList = [
    "Grammer",
    "Vocabulary",
    "Story",
    "Idioms & Expressions",
    "Games & Tests",
    "General Knowledge",
    "Music & Video",
  ];

  return (
    <div className="fixed top-28 mt-2 flex w-64 flex-col items-center overflow-hidden rounded-3xl border-2 border-black text-xl text-black">
      {sideBarList.map((array) => {
        return (
          <NavLink
            key={array}
            to={`/${spaceChecker(array.toLowerCase())}`}
            className={({ isActive }) => (isActive ? active : deactive)}
          >
            {array}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
