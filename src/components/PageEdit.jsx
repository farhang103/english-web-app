import React, { useState } from "react";
import {
  faPenToSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import EditorPage from "./EditorPage";

const PageEdit = ({ onSubmit }) => {
  const [displayRoute, setDisplayRoute] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleNewRoute = (e) => {
    e.preventDefault();
    setDisplayRoute(!displayRoute);
  };

  const handleEditor = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      onChange: (e) => setValue(e.target.value),
      resetValue: () => setValue(""),
    };
  };

  const { resetValue, ...text } = useInputValue("");
  const view = displayRoute ? " " : "hidden";
  const editView = edit ? "hidden" : "";

  return (
    <>
      {/* ADD NEW ROUTE  */}
      <div className="flex w-full">
        <div className={`mb-5 flex w-full justify-start ${view}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(text.value);
              resetValue();
            }}
          >
            <input
              type="text"
              placeholder="Add new route..."
              className="rounded-lg border-2 border-black bg-slate-50 px-4 py-2 text-base"
              {...text}
            />
            <button className="ml-4 rounded-lg border-2 border-black bg-slate-50 px-4 py-2 hover:bg-gray-700 hover:text-white">
              Add
            </button>
          </form>
        </div>
        <div className="flex h-8 w-full items-center justify-end">
          {displayRoute ? (
            <>
              <FontAwesomeIcon
                icon={faSquareXmark}
                className="h-9 cursor-pointer"
                color="black"
                onClick={handleNewRoute}
              />
            </>
          ) : (
            <div>
              <FontAwesomeIcon
                icon={faPlusSquare}
                className={`mr-4 h-9 cursor-pointer ${editView}`}
                color="black"
                onClick={handleNewRoute}
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={`mb-[2px] h-8 cursor-pointer ${editView}`}
                color="black"
                onClick={handleEditor}
              />
            </div>
          )}
          {edit ? (
            <>
              <div className="relative flex w-full flex-col items-center overflow-hidden">
                <FontAwesomeIcon
                  icon={faSquareXmark}
                  className="h-9 cursor-pointer"
                  color="black"
                  onClick={handleEditor}
                />
                <EditorPage />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PageEdit;
