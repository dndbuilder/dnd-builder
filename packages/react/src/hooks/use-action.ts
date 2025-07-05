import { ActionContext } from "@/contexts/action-context";
import { useContext } from "react";

export const useAction = () => {
  const context = useContext(ActionContext);

  if (!context) {
    throw new Error("useAction must be used within a ActionProvider");
  }

  return context;
};
