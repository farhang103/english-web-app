import React, { useContext, useState } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import EditorPage from "./EditorPage";
import ShowContent from "./context/ShowContent";

interface Props {
  id?: any;
  content?: any;
}

const PageEdit = ({ id, content }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const showContent = useContext(ShowContent);

  const handleEditor = (e: any) => {
    e.preventDefault();
    setEdit(!edit);
    showContent?.setIsOpen(!showContent?.isOpen);
  };

  const editView = edit ? "hidden" : "";

  return (
    <>
      <div className="flex items-center justify-end">
        {edit ? (
          <>
            <div className="relative flex w-full flex-col overflow-hidden">
              <div className="mb-4 flex justify-end">
                <FontAwesomeIcon
                  icon={faSquareXmark}
                  className="flex h-9 cursor-pointer"
                  color="black"
                  onClick={handleEditor}
                />
              </div>
              <EditorPage
                edit={edit}
                setEdit={setEdit}
                id={id}
                content={content}
              />
            </div>
          </>
        ) : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={`mb-[2px] h-8 cursor-pointer ${editView}`}
            color="black"
            onClick={handleEditor}
          />
        )}
      </div>
    </>
  );
};

export default PageEdit;
