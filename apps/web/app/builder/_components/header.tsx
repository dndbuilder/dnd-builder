import { useContent } from "@repo/builder/hooks";
import { BreakpointSwitch, Tooltip } from "@repo/builder/components";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbDragDrop } from "react-icons/tb";
import { LuScanEye } from "react-icons/lu";

export const Header = () => {
  const [content] = useContent();

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Save to API instead of localStorage
      const response = await fetch("/api/builder-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error("Failed to save content");
      }

      toast.success("Content saved successfully!");
    } catch (error) {
      console.error("Error saving content:", error);
      toast.error("Failed to save content");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <header className="h-[60px] fixed top-0 left-0 z-[100] border-b shadow-sm w-full bg-white flex items-center justify-between px-4">
      <div className="text-white font-bold text-xl">
        {/* Placeholder logo */}
        <Link href={"/"} className="flex items-center text-slate-800">
          <TbDragDrop size={32} className="mr-2" />
          <span className="font-bold">DnD Builder</span>
        </Link>
      </div>

      <BreakpointSwitch />

      <div className="flex items-center space-x-2">
        <Tooltip>
          <Tooltip.Trigger>
            <Link
              href={"/preview"}
              target="_blank"
              className="text-slate-600 ring-1 ring-inset ring-slate-300 hover:text-slate-800 transition-colors flex items-center p-2 hover:bg-slate-100 rounded hover:ring-slate-600"
            >
              <LuScanEye size={20} />
            </Link>
            <Tooltip.Content>Preview</Tooltip.Content>
          </Tooltip.Trigger>
        </Tooltip>

        <button
          className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>
    </header>
  );
};
