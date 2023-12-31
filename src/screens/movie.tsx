import { useState, useEffect } from "react";

import { View, Image, Pressable, Text } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import { useFecth } from "../hooks/useFecth";
import { useList } from "../hooks/useList";
import { dataProps } from "../utils/types/interfaceData";
import { filmesType } from "../utils/types/interface";

interface RoutesParam {
  category: string;
}
export default function MovieScreen() {
  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();
  const { fecthFilmes, dataMovie } = useFecth();
  const { dataList } = useList();

  const [series, setSeries] = useState<dataProps[]>([]);
  const [filmes, setFilmes] = useState<dataProps[]>([]);
  const [animes, setAnimes] = useState<dataProps[]>([]);

  const [winMovie, setWinMovie] = useState<dataProps>();

  const escolherAleatoriamente = ({ minhaLista }: filmesType) => {
    const indiceAleatorio = Math.floor(Math.random() * minhaLista.length);
    return minhaLista[indiceAleatorio];
  };

  const randomButton = () => {
    const elementoAleatorio = escolherAleatoriamente({
      minhaLista:
        params.category === "series"
          ? series
          : params.category === "filmes"
          ? filmes
          : animes,
    });
    setWinMovie(elementoAleatorio!);
    fecthFilmes(elementoAleatorio!);
  };

  useEffect(() => {
    let SERIES = dataList.filter((list) => {
      return list.category === "Series";
    });
    let ANIMES = dataList.filter((list) => {
      return list.category === "Animes";
    });
    let FILMES = dataList.filter((list) => {
      return list.category === "Filmes";
    });

    if (SERIES != undefined) {
      setSeries(SERIES);
    }
    if (FILMES != undefined) {
      setFilmes(FILMES);
    }
    if (ANIMES != undefined) {
      setAnimes(ANIMES);
    }
  }, [dataList]);

  return (
    <View className="w-full h-screen justify-start items-center">
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen"
      />
      <Text className={`text-black text-[64px] font-['alex-brush']`}>
        {params.category}
      </Text>

      <View className="bg-white border-2 border-white w-64 h-[500px] justify-center items-center">
        {dataMovie.length != 0 ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${dataMovie[0].backdrop_path}`,
            }}
            className="absolute w-full h-full opacity-60"
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require(`../utils/constants/images/error-image.jpg`)}
            className="absolute w-full h-full bottom-0 object-cover opacity-60"
          />
        )}
        <Image source={require("../utils/constants/images/Iphone.png")} />
        <Pressable className="absolute active:scale-110" onPress={randomButton}>
          <Image source={require("../utils/constants/images/random.png")} />
        </Pressable>
      </View>

      <Text
        className={`text-black text-4xl mt-10 font-['alex-brush']`}
        numberOfLines={1}
      >
        {winMovie?.name}
      </Text>
    </View>
  );
}
