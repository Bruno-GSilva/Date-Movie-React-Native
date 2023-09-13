import { dataProps } from "./interfaceData";

export interface ContextProps {
    children: React.ReactNode;
}

export interface DropdownContextProps {
    selectItem: string;
    setSelectItem: React.Dispatch<React.SetStateAction<string>>;
  }
export interface ListContextProps {
    dataList: dataProps[];
    setDataList: React.Dispatch<React.SetStateAction<dataProps[]>>;
  }