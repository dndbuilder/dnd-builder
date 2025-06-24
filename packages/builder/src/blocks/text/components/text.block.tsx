import { BlockProps } from "@/types/block";
import { FC } from "react";
import { TextSettingsType } from "../types";

const Text: FC<BlockProps<TextSettingsType>> = ({ settings, meta }) => {
  const locale = meta?.locale || "en";

  const text = settings.text?.[locale] || "";

  return (
    <p
      className="text prose prose-sm prose-slate"
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

export default Text;
