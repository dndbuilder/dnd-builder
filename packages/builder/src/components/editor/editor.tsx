"use client";

import PageLoader from "@/components/shared/page-loader";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { clearContent, setContent } from "@/store/builder-slice";
import { getContent } from "@/store/selectors";
import { setActiveTheme } from "@/store/theme-slice";
import { Block } from "@/types/block";
import { Theme } from "@/types/theme";
import { FC, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CanvasArea from "./canvas-area";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";

type Props = {
  content: Record<string, Block>;
  theme: Theme;
};

const Editor: FC<Props> = ({ content, theme }) => {
  const dispatch = useAppDispatch();

  const contentState = useAppSelector(getContent);

  const isDirty = JSON.stringify(content) !== JSON.stringify(contentState);

  useEffect(() => {
    dispatch(
      setActiveTheme({
        id: theme.id,
        name: theme.name,
        settings: theme.settings,
      })
    );
  }, [theme]);

  useEffect(() => {
    if (!content) {
      dispatch(clearContent());
      return;
    }

    dispatch(setContent(content));
  }, [content]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = true;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative flex h-[calc(100vh-60px)] w-full flex-wrap overflow-hidden">
        {/* Builder Left Sidebar Panel */}
        <LeftPanel />

        {/* Builder Canvas */}
        <CanvasArea />

        {/* Builder Right Sidebar Panel */}
        <RightPanel />
      </div>
    </DndProvider>
  );
};

export default Editor;
