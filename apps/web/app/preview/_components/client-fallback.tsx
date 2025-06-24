"use client";

import { Block } from "@repo/builder";
import { RenderContent } from "@repo/builder/components";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import ClientStyleManager from "./client-style-manager";

const ClientFallback = () => {
  const [content, setContent] = useState<Record<string, Block>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    // Try to load content from localStorage
    try {
      const savedContent = localStorage.getItem("builder-content");
      if (savedContent) {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
        setHasContent(Object.keys(parsedContent).length > 0);
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CgSpinner className="animate-spin text-4xl text-gray-500" size={50} />
      </div>
    );
  }

  if (!hasContent) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">No content found</h1>
      </div>
    );
  }

  return (
    <>
      <RenderContent content={content} />
      <ClientStyleManager content={content} />
    </>
  );
};

export default ClientFallback;