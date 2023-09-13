import { Text } from "react-native";
import { IconDrawer } from "./icon";
import { useList } from "../../hooks/useList";
import Animated, { SlideInUp } from "react-native-reanimated";

interface listProps {
  id: number;
  name: string;
}

export const MyList = ({ name, id }: listProps) => {
  const { deleteData } = useList();
  return (
    <>
      <Animated.View entering={SlideInUp.delay(300)} className="w-full h-auto flex-row items-center justify-between px-4 py-2 border-b-2 border-black">
        <Text
          className={`text-black text-4xl font-['alex-brush']`}
          numberOfLines={2}>
          {name}
        </Text>
        <IconDrawer
          nameIcon={"trash-alt"}
          sizeIcon={26}
          colorIcon={"black"}
          colorButton="bg-[#FF405C]"
          onPress={() => deleteData(id)}
        />
      </Animated.View>
    </>
  );
};
