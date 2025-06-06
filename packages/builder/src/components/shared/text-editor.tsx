import { FC, lazy } from "react";
import type ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface TextEditorProps extends ReactQuill.ReactQuillProps {
  onChange?: (content: string) => void;
}

const ReactQuillEditor = lazy(() => import("react-quill-new"));

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "align",
  "indent",
  "link",
];

const TextEditor: FC<TextEditorProps> = ({ value, onChange, ...props }) => {
  return (
    <ReactQuillEditor
      theme="snow"
      value={value}
      onChange={(content, _, source) => {
        if (source === "user") {
          onChange?.(content);
        }
      }}
      modules={modules}
      formats={formats}
      {...props}
    />
  );
};

export default TextEditor;
