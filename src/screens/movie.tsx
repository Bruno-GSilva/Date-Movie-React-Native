import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RouteProp, useRoute } from "@react-navigation/native";
import Reanimated, {
  BounceInLeft,
  BounceInRight,
  SlideInDown,
} from "react-native-reanimated";
import { View, Image, Pressable } from "react-native";
import { filmesType } from "../utils/types/interface";
import { minhaListaData } from "../utils/constants/lista/lista";
import { useFecth } from "../hooks/useFecth";
import { CreatedModal } from "../components/createdModal";

interface RoutesParam {
  category: string;
}
export default function MovieScreen() {
  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();

  const [winMovie, setWinMovie] = useState<string>("");
  const { dataMovie, fecthFilmes } = useFecth();

  const escolherAleatoriamente = ({ minhaLista }: filmesType) => {
    if (minhaLista.length === 0) {
      return undefined;
    }

    const indiceAleatorio = Math.floor(Math.random() * minhaLista.length);
    return minhaLista[indiceAleatorio];
  };

  const randomButton = () => {
    const elementoAleatorio = escolherAleatoriamente({
      minhaLista:
        params.category === "series"
          ? minhaListaData.SERIES
          : params.category === "filmes"
          ? minhaListaData.FILMES
          : minhaListaData.ANIMES,
    });
    setWinMovie(elementoAleatorio!);
    fecthFilmes(elementoAleatorio!);
  };

  return (
    <View className="w-full h-screen justify-start items-center">
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen"
      />
      <Reanimated.Text
        entering={BounceInLeft}
        className={`text-black text-[64px] font-['alex-brush']`}>
        {params.category}
      </Reanimated.Text>

      <Reanimated.View
        entering={SlideInDown}
        className="bg-white border-2 border-white w-64 h-[500px] justify-center items-center">
        {dataMovie.length != 0 ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${dataMovie[0].poster_path}`,
            }}
            className="absolute w-full h-full opacity-60"
          />
        ) : (
          <Image
            source={{
              uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti8GUkoJZuv__gJaWv3cQTXRd-YiwhZXzqg&usqp=CAU`,
            }}
            className="absolute bottom-0 w-48 h-48 object-cover opacity-60"
          />
        )}
        <Image source={require("../utils/constants/images/Iphone.png")} />
        <Pressable onPress={randomButton} className="absolute">
          <Image source={require("../utils/constants/images/random.png")} />
        </Pressable>
      </Reanimated.View>

      <Reanimated.Text
        entering={BounceInRight}
        className={`text-black text-[64px] font-['alex-brush']`}
        numberOfLines={1}>
        {winMovie}
      </Reanimated.Text>
    </View>
  );
}
