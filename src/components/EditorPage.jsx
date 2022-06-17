import React, { useState, useContext, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import parse from "html-react-parser";

const EditorPage = () => {
  const editorRef = useRef(null);
  const [conent, setConent] = useState();

  const log = () => {
    console.log(editorRef.current.getContent());
    setConent(editorRef.current.getContent());
  };
  return (
    <>
      <div className="flex w-full flex-col">
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: "100%",
            menubar: true,
            statusbar: false,
            advlist_bullet_styles: "square",

            browser_spellcheck: true,
            skin: window.matchMedia("(prefers-color-scheme: white)").matches
              ? "oxide-dark"
              : "oxide",
            content_css: window.matchMedia("(prefers-color-scheme: white)")
              .matches
              ? "dark"
              : "default",

            plugins: [
              "advlist",
              "autolink",
              "autosave",
              "directionality",
              "fullscreen",
              "image",
              "insertdatetime",
              "lists",
              "nonbreaking",
              "preview",
              "save",
              "table",
              "visualblocks",
              "wordcount",
              "anchor",
              "autoresize",
              "link",
              "charmap",
              "emoticons",
              "pagebreak",
              "searchreplace",
              "media",
              "visualchars",
              "help",
            ],
            toolbar:
              "undo redo save paste | blocks | " +
              "bold italic forecolor backgroundcolor | alignleft aligncenter " +
              "alignright alignjustify | ltr rtl | bullist numlist outdent indent | " +
              "removeformat pagebreak emoticons | preview fullscreen searchreplace help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <button className="m-4 border-2 border-black px-4 py-2" onClick={log}>
        Console
      </button>
      <div className="ml-4">{typeof conent === "string" && parse(conent)}</div>
    </>
  );
};

export default EditorPage;
