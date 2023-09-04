import { useState } from "react";
import { MovieDataApi, MoviesData } from "../utils/types/interface";
import axios from "axios";

export const useFecth = () => {
  const [dataMovie, setData] = useState<MoviesData[]>([]);

  const fecthFilmes = async (query: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=74e7143baeb0d85b8d30aa4cf82a390c`;

    try {
      const response = await axios.get<MovieDataApi>(url);
      const { results } = response.data;
      setData(results);
    } catch (error) {
      console.error(error);
    }
  };

  return {dataMovie, fecthFilmes}
};
