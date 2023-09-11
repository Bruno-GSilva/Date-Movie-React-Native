import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";

interface ButtonType extends TouchableOpacityProps {
  title: string;
  styleText?:string;
}

export const Button = ({ ...props }: ButtonType) => {
  return (
    <TouchableOpacity {...props} className="border-2 px-4 py-2 rounded-xl mt-8">
      <Text className={props.styleText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
