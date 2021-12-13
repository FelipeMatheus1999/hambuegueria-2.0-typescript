import { createContext, useContext, useState, ReactNode } from "react";

interface ActionsProviderProps {
  children: ReactNode;
}

interface ActionContextData {
  handleCart: string;
  setHandleCart: (prop: string) => void;
}

const ActionsContext = createContext<ActionContextData>(
  {} as ActionContextData
);

export const ActionsProvider = ({ children }: ActionsProviderProps) => {
  const [handleCart, setHandleCart] = useState("none");

  return (
    <ActionsContext.Provider value={{ handleCart, setHandleCart }}>
      {children}
    </ActionsContext.Provider>
  );
};

export const useActions = () => useContext(ActionsContext);
