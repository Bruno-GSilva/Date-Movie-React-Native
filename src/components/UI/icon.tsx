import { Pressable, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import Animated, {
  BounceInDown,
  RotateInDownLeft,
} from "react-native-reanimated";
import { IconProps } from "../../utils/types/interfaceIcon";

export const IconDrawer = (props: IconProps) => {
  const { colorIcon, nameIcon, sizeIcon, colorButton, label, onPress } = props;
  return (
    <View className="flex-row items-center justify-end">
      <Animated.Text
        entering={BounceInDown.delay(300)}
        className="text-md text-white font-semibold mr-2"
      >
        {label}
      </Animated.Text>
      <Pressable
        className={`justify-center items-center w-14 h-14 mb-2 border-2 border-transparent ${colorButton} rounded-2xl active:bg-slate-800 shadow-md shadow-black`}
        onPress={onPress}
      >
        <Animated.View entering={RotateInDownLeft.delay(450)}>
          <Icon name={nameIcon} color={colorIcon} size={sizeIcon} />
        </Animated.View>
      </Pressable>
    </View>
  );
};