import React from "react";
import {
  faPenToSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageEdit = () => {
  return (
    <>
      <div className="flex h-8 w-full items-center justify-end">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="mr-4 h-9 cursor-pointer"
          color="black"
        />

        <FontAwesomeIcon
          icon={faPenToSquare}
          className="h-8 cursor-pointer"
          color="black"
        />
      </div>
    </>
  );
};

export default PageEdit;
