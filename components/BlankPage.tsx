import React, { Children, ReactNode, useContext, useEffect } from "react";
import Link from "next/link";
import { MenuContext } from "./context/MenuBar";
import { useRouter } from "next/router";
// import { GrammerContext } from "../context/GrammerContext";
// import { getContexts } from "react-dynamic-context-provider";
// import PageEdit from "./PageEdit";

interface propArray {
  route?: string[];
  children?: ReactNode;
}

const BlankPage = ({ route, children }: propArray) => {
  const router = useRouter();

  const menuContext = useContext(MenuContext);

  function hasWhiteSpace(s: string) {
    return s.indexOf(" ") >= 0;
  }

  const spaceChecker = (array: string) => {
    const space = hasWhiteSpace(array);
    if (!space) return array;
    array = array.replace(/\s/g, "-");
    return array;
  };

  return (
    <div
      className={
        menuContext?.open ? "blankPage sm:hidden lg:block" : "blankPage"
      }
    >
      {/* <PageEdit
        onSubmit={(text) => {
          setMyValue([...myValue, text]);
          setName(text);
        }}
      /> */}
      {route?.map((array) => {
        return (
          <div key={array}>
            <Link
              href={`${router.pathname}/${spaceChecker(array.toLowerCase())}`}
            >
              {array}
            </Link>
          </div>
        );
      })}
      <main>{children}</main>
    </div>
  );
};

export default BlankPage;
