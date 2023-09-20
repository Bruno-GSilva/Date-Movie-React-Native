import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface setLocalProps {
  value: string;
}

export const useAsyncStorage = (key:string) => {
  const [storageData, setStorageData] = useState<string>("");

  const setLocal = async ({ value }: setLocalProps) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error("error ao salvar", e);
    }
  };

  
  const readLocal = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setStorageData(value);
      }
    } catch (e) {
      console.error("error ao ler", e);
    }
  };
  
  useEffect(()=>{
    readLocal()
  },[])

  return { setLocal, readLocal, storageData };
};
