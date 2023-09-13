import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { DropdownContext } from "../contexts/Dropdown";
import { MyList } from "../components/UI/list";
import { Dropdown } from "../components/UI/dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components/UI/button";
import { TextInput } from "react-native-gesture-handler";
import { useList } from "../hooks/useList";

export default function ListScreen() {
  const [text, setText] = useState<string>("");
  const { selectItem } = useContext(DropdownContext);
  const { createdData, dataList } = useList();

  const saveItem = () => {
    if (selectItem) {
      createdData({ category: selectItem, name: text });
    } else {
      alert("selecione uma categoria");
    }
  };

  return (
    <View className={`flex-1 justify-center items-start px-2 py-4`}>
      <LinearGradient
        colors={["#ffffff", "#FF405C"]}
        className="absolute w-screen h-screen opacity-60"
      />
      <Text className="text-4xl text-black font-['alex-brush'] w-full text-center my-2">
        Criar Lista
      </Text>
      <Dropdown data={["Filmes", "Series", "Animes"]} label="Categorias" />

      <Text className="text-4xl font-['alex-brush'] text-black mt-4 ">
        Minha Lista{selectItem ? ` - (${selectItem})` : ""}
      </Text>
      <View className={`w-full`}>
        <TextInput
          className="w-full px-4 py-2 border-2 border-black rounded-md text-black text-4xl font-['alex-brush']"
          placeholder="escreva aqui..."
          onChangeText={(e) => setText(e)}
        />
      </View>
      <ScrollView className="flex-1 w-full">
        {dataList.length != 0 ? (
          dataList
            .slice()
            .reverse()
            .map((item, index) =>
              item.category === selectItem ? (
                <MyList key={index} name={item.name} id={item.id} />
              ) : null
            )
        ) : (
          <View className="flex-1 justify-center items-center p-4">
            <ActivityIndicator size={32} color={"black"} />
            <Text className="text-4xl text-black">carregando...</Text>
          </View>
        )}
      </ScrollView>
      <Button
        title="Salvar"
        className={`absolute bottom-0 right-0 m-4 w-1/3 p-4 items-center bg-[#FF405C] border-transparent ${
          !selectItem ? "bg-[#FF405C60]" : ""
        }`}
        onPress={saveItem}
        disabled={selectItem ? false : true}
      />
    </View>
  );
}
