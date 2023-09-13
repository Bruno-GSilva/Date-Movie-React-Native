import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { createdData, dataProps } from "../utils/types/interfaceData";

export const useList = () => {
  const [dataList, setDataList] = useState<dataProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data: date_movies, error } = await supabase
          .from("date_movies")
          .select("*");

        if (date_movies !== null) {
          setDataList(date_movies);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [setDataList]);

  const createdData = async ({
    category: selectItem,
    name: text,
  }: createdData) => {
    try {
      const { data, error } = await supabase
        .from("date_movies")
        .insert([{ category: selectItem, name: text }])
        .select();

      if (data != null) {
        alert("foi criado");
        setDataList((item) => [...item, ...data]);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = async (movie_id: number) => {
    try {
      const { error, data } = await supabase
        .from("date_movies")
        .delete()
        .eq("id", movie_id);
      console.log("error ao deletar", error);

      if (data != null) {
        setDataList((prev) => [...prev, ...data]);
      }else{
        console.log("ta retornando nulo")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { dataList, createdData, deleteData };
};
