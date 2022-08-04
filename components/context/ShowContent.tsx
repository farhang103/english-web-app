import { createContext } from "react";

type ShowContentProvider = {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowContent = createContext<ShowContentProvider | null>(null);

export default ShowContent;
