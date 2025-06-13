import { useContent } from "@repo/builder/hooks";
import { Popover } from "@repo/builder/components";
import { useState } from "react";
import { TbDragDrop } from "react-icons/tb";
import toast from "react-hot-toast";
import { FiChevronDown, FiSave } from "react-icons/fi";
import Link from "next/link";

export const Header = () => {
  const [content] = useContent();

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      // Simulate saving process
      try {
        localStorage.setItem("builder-content", JSON.stringify(content));
        toast.success("Content saved successfully!");
      } catch (error) {
        console.error("Error saving content to localStorage:", error);
      } finally {
        setIsSaving(false);
      }
    }, 1000); // Simulate a delay for saving
  };

  return (
    <>
      <header className="h-[60px] w-full bg-white flex items-center justify-between px-4 absolute top-0 left-0 z-50 shadow-md">
        {/* Placeholder logo */}
        <Link href="/" className="flex items-center text-slate-800 gap-1">
          <TbDragDrop size={32} />
          <span className="text-xl font-semibold">DnD Builder</span>
        </Link>
        <div className="flex divide-x divide-slate-600">
          <button
            className="bg-slate-800 hover:bg-slate-900 text-white py-2 px-6 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-s"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <FiSave className="inline mr-2" />
            ) : (
              <FiSave className="inline mr-2" />
            )}
            {isSaving ? "Saving..." : "Save"}
          </button>
          <Popover>
            <Popover.Trigger className="text-white rounded-e transition-colors px-1.5 py-2 flex items-center bg-slate-800 hover:bg-slate-900">
              <FiChevronDown size={20} />
            </Popover.Trigger>
            <Popover.Content className="w-[150px]" align="end">
              <div>Export Content</div>
              <div>Import Content</div>
            </Popover.Content>
          </Popover>
        </div>
      </header>
    </>
  );
};
