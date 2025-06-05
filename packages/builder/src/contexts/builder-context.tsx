import { store } from "../store";
import { Provider } from "react-redux";
import { ActionProvider } from "./action-context";

export type BuilderContextType = {
  store: typeof store;
  children: React.ReactNode;
};

export const BuilderProvider = ({ store, children }: BuilderContextType) => {
  return (
    <Provider store={store}>
      <ActionProvider>{children}</ActionProvider>
    </Provider>
  );
};
