import React, { useState, createContext } from "react";

type MenuAppProvider = {
  open: boolean | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuAppProvider | null>(null);

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [open, setOpen] = useState<boolean | null>(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
