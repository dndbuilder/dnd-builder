import { EditorBlockConfig } from "@/types/block";
import { Suspense, useRef } from "react";
import { useDrag } from "react-dnd";
import { FiGrid } from "react-icons/fi";

type Props = {
  block: EditorBlockConfig;
};

const BlockNavigationItem = ({ block }: Props) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: block.type,
      item: {
        type: block.type,
        settings: block.settings,
        advancedSettings: block.advancedSettings,
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  const dragRef = useRef<HTMLDivElement>(null);

  drag(dragRef);

  return (
    <div
      ref={dragRef}
      style={{ opacity }}
      className="h-[88px] flex cursor-move flex-col items-center overflow-hidden rounded-sm border border-slate-200 bg-slate-50 py-4 text-slate-800 transition-colors duration-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-500"
    >
      <div className="text-[22px] mb-1 text-slate-600">
        <Suspense fallback={null}>
          {block.icon ? <block.icon /> : <FiGrid />}
        </Suspense>
      </div>
      <p className="mt-auto text-center text-xs">{block.label}</p>
    </div>
  );
};

export default BlockNavigationItem;
