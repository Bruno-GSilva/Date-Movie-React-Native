import { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";

import { useFecth } from "./src/hooks/useFecth";
import { filmesType } from "./src/utils/types/interface";
import { minhaListaData } from "./src/utils/constants/lista/lista";

import { Button } from "./src/components/UI/button";
import { CardInfo } from "./src/components/cardInfo";
import Icon from "@expo/vector-icons/FontAwesome5";

export default function App() {
  const [winMovie, setWinMovie] = useState("");
  const { dataMovie, fecthFilmes } = useFecth();

  const escolherAleatoriamente = ({ minhaLista }: filmesType) => {
    if (minhaLista.length === 0) {
      return undefined;
    }

    const indiceAleatorio = Math.floor(Math.random() * minhaLista.length);
    return minhaLista[indiceAleatorio];
  };

  const randomButton = () => {
    const choice = minhaListaData.FILMES;
    const choiceFilme = choice.concat(minhaListaData.SERIES);

    const elementoAleatorio = escolherAleatoriamente({
      minhaLista: choiceFilme,
    });
    setWinMovie(elementoAleatorio!);
    fecthFilmes(elementoAleatorio!);
  };

  useEffect(() => {
    fecthFilmes("");
  }, []);

  return (
    <ImageBackground
      source={require("./src/utils/constants/images/BGLove.jpeg")}
      className="w-screen h-screen justify-center items-center px-4"
      blurRadius={10}>
      <Text className="text-white text-4xl font-bold mb-2">
        Date Movie - Vesion Beta
      </Text>
      <View className="w-full h-96 bg-[#00000080] shadow-2xl shadow-black rounded-lg p-6 overflow-hidden">
        <CardInfo path={dataMovie[0]?.poster_path} winner={winMovie} />
        <View className="absolute bottom-0 right-0 m-3" >
          <Icon name="heart" solid color="red" size={28}/>
        </View>
      </View>
      <Button onPress={randomButton} />
    </ImageBackground>
  );
}
