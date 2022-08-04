import React, { useContext, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import initValue from "./tinyMCE/intial";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ShowContent from "./context/ShowContent";

interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  id?: any;
  content?: any;
}

const EditorPage = ({ edit, setEdit, id, content }: Props) => {
  const router = useRouter();
  const editorRef = useRef<any>(null);
  const showContent = useContext(ShowContent);

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const addContent = async (data: any) => {
    const contId = String(router.query.body);

    // Updating
    if (contId === id) {
      const respone = await fetch(`/api/editor/${contId}`, {
        method: "PUT",
        body: JSON.stringify({ content: data }),
      });
      return await respone.json();
    }

    // Creating
    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ content: data, id: contId }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  };

  const handleCreate = async () => {
    await addContent(editorRef?.current?.getContent());
    refreshData();
    setEdit(!edit);
    showContent?.setIsOpen(!showContent?.isOpen);
  };

  // Deleting
  const deleteContent = async (id: string) => {
    fetch(`/api/editor/${id}`, {
      method: "DELETE",
    }).then(() => {
      refreshData();
      setEdit(!edit);
      showContent?.setIsOpen(!showContent?.isOpen);
    });
  };

  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <div className="rounded-lg border-2 border-black bg-slate-50 p-6 shadow-xl">
              <h1>Are you sure?</h1>
              <button
                className="mr-2 mt-6 rounded-lg border-2 border-black bg-red-600 px-4 py-2 text-white hover:bg-red-700 hover:text-white"
                onClick={() => {
                  deleteContent(id);
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
              <button
                className="mt-6 rounded-lg border-2 border-black px-4 py-2 hover:bg-gray-700 hover:text-white"
                onClick={onClose}
              >
                No
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <Editor
          tinymceScriptSrc="/tinymce/tinymce.min.js"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={content ? content : "<p>Write something</p>"}
          init={{ ...initValue }}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="mt-6 rounded-lg border-2 border-black px-4 py-2 hover:bg-gray-700 hover:text-white"
          onClick={handleCreate}
        >
          Save
        </button>
        {content ? (
          <button
            className="ml-2 mt-6 rounded-lg border-2 border-black bg-red-600 px-4 py-2 text-white hover:bg-red-700 hover:text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EditorPage;
