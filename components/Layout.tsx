import React, { ReactNode, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { MenuContextProvider } from "./context/MenuBar";
import ShowContent from "./context/ShowContent";

interface Props {
  children?: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative grid grid-cols-12 grid-rows-6 lg:mr-7 lg:grid-cols-10 lg:gap-10 xlg:grid-cols-10">
      <MenuContextProvider>
        <ShowContent.Provider value={{ isOpen, setIsOpen }}>
          <Header />
          <SideBar />
          <main>{children}</main>
        </ShowContent.Provider>
      </MenuContextProvider>
    </div>
  );
};

export default RootLayout;
