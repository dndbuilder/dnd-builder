"use client";

import { CanvasArea } from "@/components";
import { BuilderConfiguration } from "@/config";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { clearContent, setContent } from "@/store/builder-slice";
import { BuilderConfig } from "@/types";
import { Theme } from "@/types/theme";
import { Block } from "@/types/block";
import { classNames } from "@/utils";
import { validateApp } from "@/utils/validate-app";
import { FC, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LeftPanel } from "./left-panel";
import { RightPanel } from "./right-panel";
import { setActiveTheme } from "@/store/theme-slice";

export type EditorProps = {
  content: Record<string, Block>;
  appId: string;
  appKey: string;
  apiBaseUrl?: string;
  className?: string;
  builderConfig?: BuilderConfig;
  theme?: Theme;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "content" | "className">;

export const Editor: FC<EditorProps> = ({
  content,
  appId,
  appKey,
  apiBaseUrl,
  className,
  builderConfig,
  theme,
  children,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const [isValidating, setIsValidating] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Validate app credentials on mount
  useEffect(() => {
    const performValidation = async () => {
      if (!appId || !appKey) {
        setValidationError("appId and appKey are required");
        setIsValidating(false);
        return;
      }

      try {
        const result = await validateApp(appId, appKey, apiBaseUrl);
        if (!result.valid) {
          setValidationError("Invalid app credentials. Please check your appId and appKey.");
        }
      } catch (error) {
        setValidationError(
          error instanceof Error
            ? error.message
            : "Validation failed. Please check your credentials."
        );
      } finally {
        setIsValidating(false);
      }
    };

    performValidation();
  }, [appId, appKey, apiBaseUrl]);

  useEffect(() => {
    if (!content) {
      dispatch(clearContent());
      return;
    }

    dispatch(setContent(content));
  }, [content]);

  useEffect(() => {
    if (!theme) return;

    // Dispatch an action to set the theme in the store
    dispatch(setActiveTheme(theme));
  }, [dispatch, theme]);

  // Apply custom builder configuration if provided
  useEffect(() => {
    if (builderConfig) {
      BuilderConfiguration.mergeConfig(builderConfig);
    }
  }, [builderConfig]);

  // Call onChange when contentState changes
  // useEffect(() => {
  //   if (onChange && isDirty) {
  //     onChange(contentState);
  //   }
  // }, [contentState, onChange, isDirty]);

  // useEffect(() => {
  //     onChange?.(contentState);
  // }, [contentState]);
  //
  // useEffect(() => {
  //   const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //     if (isDirty) {
  //       e.preventDefault();
  //       e.returnValue = true;
  //     }
  //   };
  //
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [isDirty]);

  const renderEditor = () => {
    if (children) {
      return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
    }

    return (
      <DndProvider backend={HTML5Backend}>
        <div
          className={classNames("relative flex h-full w-full flex-wrap overflow-hidden", className)}
          {...props}
        >
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

  return (
    <div className="relative h-full w-full">
      {renderEditor()}

      {/* Validation Error Overlay */}
      {validationError && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/50">
          <div className="mx-4 max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Validation Error</h3>
                <p className="mt-1 text-sm text-gray-600">{validationError}</p>
                <p className="mt-2 text-xs text-gray-500">
                  Please check your appId and appKey credentials and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isValidating && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-30">
          <div className="rounded-lg bg-white px-6 py-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
              <span className="text-sm font-medium text-gray-700">Validating credentials...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
