export interface ContextProps {
    children: React.ReactNode;
}

export interface DropdownContextProps {
    selectItem: string;
    setSelectItem: React.Dispatch<React.SetStateAction<string>>;
  }