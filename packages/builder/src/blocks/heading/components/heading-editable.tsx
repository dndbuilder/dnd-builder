import { useBlockSettings } from "@/hooks/use-block-settings";
import { BlockMeta } from "@/types/block";
import { FC } from "react";
import sanitizeHtml from "sanitize-html";
import { HeadingSettingsType } from "../types";
import ContentEditable from "@/components/shared/content-editable";

const HeadingEditable: FC<{
  settings: HeadingSettingsType;
  id: string;
  meta: BlockMeta;
}> = ({ id, settings, meta }) => {
  const [title, setTitle] = useBlockSettings<string>(
    id,
    `title.${meta.locale}`
  );
  const sanitizeConf = {
    allowedTags: [
      "div",
      "span",
      "br",
      "p",
      "strong",
      "small",
      "abbr",
      "sub",
      "mark",
      "em",
    ],
  };

  const TagName = settings.htmlTag || "h2";

  const defaultTitle = settings.title?.["en"] || "";

  return (
    <ContentEditable
      tagName={TagName}
      onChange={(e) => {
        const value = e.target.value;
        // setTitle(sanitizeHtml(value, sanitizeConf));
        setTitle(value);
      }}
      html={title || defaultTitle}
      className="heading focus-visible:outline-0 leading-5"
    />
    // <TagName
    //   className="heading focus-visible:outline-0 leading-5"
    //   contentEditable
    //   suppressContentEditableWarning
    //   onBlur={(e) => {
    //     const value = e.currentTarget.innerText;
    //     setTitle(sanitizeHtml(value, sanitizeConf));
    //   }}
    //   // dangerouslySetInnerHTML={{
    //   //   __html: title || defaultTitle,
    //   // }}
    //   onInput={(e) => {
    //     const value = e.currentTarget.innerText;
    //     setTitle(sanitizeHtml(value, sanitizeConf));
    //   }}
    //   onKeyDown={(e) => {
    //     if (e.key === "Enter") {
    //       e.preventDefault();
    //     }
    //   }}
    // >
    //   {title || defaultTitle}
    // </TagName>
  );
};

export default HeadingEditable;
