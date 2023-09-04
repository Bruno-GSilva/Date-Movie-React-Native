import Reanimated, { BounceIn, SlideInLeft } from "react-native-reanimated";
import { Text, ImageBackground } from "react-native";

interface CardInfoProps {
  path: string;
  winner: string;
}

export const CardInfo = ({ path, winner }: CardInfoProps) => {
  return (
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${path}`,
        }}
        className="w-full bg-black flex-1 rounded-lg justify-center items-center overflow-hidden"
        blurRadius={10}>
        <Reanimated.Text entering={SlideInLeft} className="text-2xl font-bold text-white">
          E o <Text className="text-amber-500 font-bold">Vencedor</Text> é:
        </Reanimated.Text>
        <Reanimated.Text
          entering={BounceIn.delay(2000)}
          className="text-4xl text-white font-semibold m-2"
          numberOfLines={3}>
          {winner}
        </Reanimated.Text>
      </ImageBackground>
  );
};
