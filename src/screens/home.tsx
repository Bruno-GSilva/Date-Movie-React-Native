import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { AlexBrush_400Regular, useFonts } from "@expo-google-fonts/alex-brush";
import * as SplashScreen from "expo-splash-screen";
import * as ImagePicker from 'expo-image-picker';

import { ImageBackground, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/UI/button";
import { CreatedModal } from "../components/createdModal";

export default function HomeScreen() {

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets![0].uri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const {navigate} = useNavigation()

  const [fontsLoaded, fontError] = useFonts({
    "alex-brush": AlexBrush_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground
      source={{uri:image?image : ""}}
      className="w-screen h-screen justify-center items-center px-4 py-14"
      blurRadius={0}
      onLayout={onLayoutRootView}
      >
      
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen opacity-60"
      />

      <View className="absolute w-screen h-screen bg-gradient-to-r to-red-500 from-slate-950" />
      <Text
        className={`absolute top-0 mt-14 text-black text-[64px] font-['alex-brush'] mb-2`}>
        Date Movie
      </Text>
      <View className="gap-10">
        <Button
          title="Filmes"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={()=> navigate('movie', {category:"filmes"})}
        />
        <Button
          title="Series"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={()=> navigate('movie', {category:"series"})}
        />
        <Button
          title="Animes"
          styleText="font-['alex-brush'] text-4xl mt-2"
          className="w-44 bg-[#FF405C] border-transparent justify-center items-center"
          onPress={()=> navigate('movie', {category:"animes"})}
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
        apresentationColor="bg-[#FF405C]"
        sizeIcon={26}
      />
    </ImageBackground>
  );
}
