import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { MenuContext } from "./context/MenuBar";

interface Props {
  display?: boolean;
}

const SideBar = (sideBarProps: Props) => {
  const router = useRouter();
  const menuContext = useContext(MenuContext);

  const deactive =
    "flex w-full items-center justify-center p-5 hover:text-white hover:bg-gray-700";
  const active =
    "flex w-full items-center justify-center p-5 text-white bg-gray-800";

  function hasWhiteSpace(s: string) {
    return s.indexOf(" ") >= 0;
  }

  const spaceChecker = (array: string) => {
    const hasSpace = hasWhiteSpace(array);
    if (!hasSpace) return array;
    if (!array.includes("&") && hasSpace) {
      array = array.replace(/\s/g, "-");
      return array;
    }
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

  sideBarProps.display
    ? sideBarList.push("Blog", "Write", "About", "Contact")
    : null;

  const sideDisplay = sideBarProps.display
    ? "sm:block w-full lg:block"
    : "sm:hidden lg:block fixed mt-2 lg:ml-7";

  return (
    <div
      className={`${sideDisplay} top-28 col-start-2 col-end-3 flex flex-col items-center overflow-hidden rounded-3xl border-2 border-black text-xl text-black`}
    >
      {sideBarList.map((array) => {
        return (
          <Link key={array} href={`/${spaceChecker(array.toLowerCase())}`}>
            <a
              className={
                router.pathname == `/${spaceChecker(array.toLowerCase())}`
                  ? active
                  : deactive
              }
              onClick={() => menuContext?.setOpen(!menuContext?.open)}
            >
              {array}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
