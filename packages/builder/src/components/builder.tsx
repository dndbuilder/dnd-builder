import { BuilderProvider } from "@/contexts/builder-context";
import { store } from "@/store";
import { Block } from "@/types/block";
import { FC } from "react";
import Editor from "./editor";

type BuilderProps = {
  content: Record<string, Block>;
};

const Builder: FC<BuilderProps> = ({ content }) => {
  return (
    <>
      <BuilderProvider store={store}>
        <Editor content={content} />
      </BuilderProvider>
    </>
  );
};

export default Builder;
