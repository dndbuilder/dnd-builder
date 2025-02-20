import { Block, BlockMeta } from "@/types/block";
import { FC } from "react";
import EditorRenderBlock from "./editor-render-block";

type RenderContentClientProps = {
  content: Record<string, Block>;
  children?: React.ReactNode;
  meta: BlockMeta;
};

const EditorRenderContent: FC<RenderContentClientProps> = ({
  content,
  children,
  meta,
}) => {
  const root = content["root"];

  if (!root) {
    return null;
  }

  return (
    <>
      <main>
        {root.children.map(
          (block, index) =>
            typeof block === "string" && (
              <EditorRenderBlock
                index={index}
                block={block}
                key={block}
                meta={meta}
                isEditable={true}
              />
            )
        )}
      </main>
      {children}
    </>
  );
};

export default EditorRenderContent;
