"use client";

import { BlockProps } from "@/types/block";
import { FC } from "react";
import { HeadingSettingsType } from "../types";
import HeadingEditable from "./heading-editable";

const Heading: FC<BlockProps<HeadingSettingsType>> = ({
  id,
  settings,
  meta,
}) => {
  return <HeadingEditable id={id} settings={settings} meta={meta} />;
};

export default Heading;
