"use client";

import { Block, StyleManager, ThemeConfiguration } from "@repo/builder";
import { FC } from "react";

interface ClientStyleManagerProps {
  content: Record<string, Block>;
}

const ClientStyleManager: FC<ClientStyleManagerProps> = ({ content }) => {
  return (
    <StyleManager
      content={content}
      themeSettings={ThemeConfiguration.settings}
    />
  );
};

export default ClientStyleManager;