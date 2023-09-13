import React, { createContext, useState } from "react";
import { ContextProps, DropdownContextProps } from "../utils/types/context";

export const DropdownContext = createContext({} as DropdownContextProps);

export const DropdownProvider = ({ children }: ContextProps) => {
  const [selectItem, setSelectItem] = useState("");

  return (
    <DropdownContext.Provider value={{ selectItem, setSelectItem }}>
      {children}
    </DropdownContext.Provider>
  );
};
