import React, { createContext, useState } from "react";
import { ContextProps, ListContextProps } from "../utils/types/context";
import { dataProps } from "../utils/types/interfaceData";

export const ListContext = createContext({} as ListContextProps);

export const ListProvider = ({ children }: ContextProps) => {
    const [dataList, setDataList] = useState<dataProps[]>([])

  return (
    <ListContext.Provider value={{ dataList, setDataList }}>
      {children}
    </ListContext.Provider>
  );
};
