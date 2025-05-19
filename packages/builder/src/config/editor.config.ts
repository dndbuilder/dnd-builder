import { ContainerConfig } from "@/blocks/container";
import { HeadingConfig } from "@/blocks/heading";
import { TabsConfig } from "@/blocks/tabs";
import { registerEditorBlocks } from "@/core";

export const BlockConfiguration = registerEditorBlocks([
  ContainerConfig,
  HeadingConfig,
  TabsConfig,
]);
