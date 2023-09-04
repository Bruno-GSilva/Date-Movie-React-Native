import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";

interface ButtonType extends TouchableOpacityProps {}

export const Button = ({ ...props }: ButtonType) => {
  return (
    <TouchableOpacity {...props} className="border-2 p-4 rounded-xl mt-8">
      <Text className="text-white">Random</Text>
    </TouchableOpacity>
  );
};
