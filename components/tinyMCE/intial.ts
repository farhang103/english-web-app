 const initValue = {
  height: "100%",
  menubar: true,
  statusbar: false,
  advlist_bullet_styles: "square",
  browser_spellcheck: true,

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
};

export default initValue;
