import { Ionicons } from "@expo/vector-icons";
import { useState, useContext, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { DropdownContext } from "../../contexts/Dropdown";

interface DropdownProps {
  data: string[];
  label: string;
}

export const Dropdown = ({ data, label }: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectCategory, setSelectCategory] = useState<string>("");

  const { setSelectItem } = useContext(DropdownContext);

  useEffect(() => {
    setSelectItem(selectCategory);
  }, [selectCategory]);

  return (
    <View
      className={`w-full ${
        openDropdown ? "h-auto" : ""
      } border-2 border-black rounded-md overflow-hidden bg-[#FF405C]`}>
      <Pressable
        className="flex-row justify-center p-2 items-center w-full "
        onPress={() => setOpenDropdown(!openDropdown)}>
        <Text className="text-xl text-black">{label}</Text>
        <Ionicons
          name={openDropdown ? "chevron-down" : "chevron-up"}
          size={32}
          color={"#000000"}
          style={{ marginTop: 5 }}
        />
      </Pressable>

      {openDropdown &&
        data!
          .slice()
          .reverse()
          .map((item, index) => (
            <Pressable
              key={index}
              className="w-full px-4 py-1 border-t active:bg-[#c53b50]"
              onPress={() => setSelectCategory(item)}>
              <Text className="text-black text-xl">{item}</Text>
            </Pressable>
          ))}
    </View>
  );
};
