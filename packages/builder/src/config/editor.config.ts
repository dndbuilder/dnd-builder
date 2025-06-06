import { ContainerConfig } from "@/blocks/container";
import { HeadingConfig } from "@/blocks/heading";
import { TabsConfig } from "@/blocks/tabs";
import { TextConfig } from "@/blocks/text";
import { registerEditorBlocks } from "@/core";

export const BlockConfiguration = registerEditorBlocks([
  ContainerConfig,
  HeadingConfig,
  TextConfig,
  TabsConfig,
]);
