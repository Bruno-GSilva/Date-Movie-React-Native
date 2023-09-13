import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface setLocalProps {
  value: string;
  key: string;
}

export const useAsyncStorage = () => {
  const [storageData, setStorageData] = useState<string>("");

  const setLocal = async ({ key, value }: setLocalProps) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("valor adicionado", value);
    } catch (e) {
      console.error("error ao salvar", e);
    }
  };

  const readLocal = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log("valor obtido:", value);
        setStorageData(value);
      }
    } catch (e) {
      console.error("error ao ler", e);
    }
  };

  return { setLocal, readLocal, storageData };
};
