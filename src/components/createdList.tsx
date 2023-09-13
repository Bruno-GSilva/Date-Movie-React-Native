import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface CreatedListProps {}

export const CreatedList: React.FC = ({}: CreatedListProps) => {
  return (
    <View className={`w-full`}>
      <TextInput
        className="w-full px-4 py-2 border-2 border-black rounded-md text-2xl font-[alex-brush]"
        placeholder="escreva aqui..."
      />
    </View>
  );
};
