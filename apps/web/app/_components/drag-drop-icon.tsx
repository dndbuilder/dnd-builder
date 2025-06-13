import { IconBaseProps } from "react-icons/lib";

export function DragDropIcon(props: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="M18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="M8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path d="m14 8 4 6" />
      <path d="m16 14-8 4" />
      <path d="M8 8v10" />
    </svg>
  );
}
