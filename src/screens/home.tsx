import { useEffect, useState } from "react";

import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

import { Button } from "../components/UI/button";
import { CreatedModal } from "../components/createdModal";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

export default function HomeScreen() {
  const { navigate } = useNavigation();

  const [image, setImage] = useState<string>("");
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const { setLocal, readLocal, storageData } = useAsyncStorage("image_url");

  useEffect(() => {
    readLocal();
  }, [image]);

  const pickImage = async () => {
    requestPermission();
    let { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!canceled) {
      setImage(assets![0].uri);
      setLocal({ value: assets![0].uri });
    }
  };

  return (
    <SafeAreaView className="w-screen h-screen justify-center items-center px-4 py-14">
      <StatusBar hidden />
      {storageData && (
        <ImageBackground
          source={{ uri: storageData ? storageData : image }}
          className="absolute -z-10 w-screen h-screen object-contain"
          blurRadius={0}
        />
      )}
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen opacity-60"
      />
      <View className="absolute w-screen h-screen bg-gradient-to-r to-red-500 from-slate-950" />
      <Text
        className={`absolute top-0 mt-14 text-black text-[64px] font-['alex-brush'] mb-2`}
      >
        Date Movie
      </Text>
      <View className="gap-10">
        <Button
          title="Filmes"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={() => navigate("movie", { category: "filmes" })}
        />
        <Button
          title="Series"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={() => navigate("movie", { category: "series" })}
        />
        <Button
          title="Animes"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={() => navigate("movie", { category: "animes" })}
        />
      </View>
      <CreatedModal
        apresentationIcon="pen"
        color="bg-[#FF405C]"
        colorIcon="white"
        firstAction={pickImage}
        firstIconName="camera"
        labelIconFirst="background"
        secondIconName="list"
        labelIconSecond="Editar lista"
        secondAction={() => navigate("list")}
        apresentationColor="bg-[#FF405C]"
        sizeIcon={26}
      />
    </SafeAreaView>
  );
}
