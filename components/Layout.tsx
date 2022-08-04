import React, { ReactNode } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import BlankPage from "./BlankPage";
import { MenuContextProvider } from "./context/MenuBar";

interface Props {
  children?: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="relative grid grid-cols-12 grid-rows-6 lg:mr-7 lg:grid-cols-10 lg:gap-10 xlg:grid-cols-10">
      <MenuContextProvider>
        <Header />
        <SideBar />
        <main>{children}</main>
      </MenuContextProvider>
    </div>
  );
};

export default RootLayout;
