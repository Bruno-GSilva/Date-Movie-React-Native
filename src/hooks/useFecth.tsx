import { useState } from "react";
import { MovieDataApi, MoviesData } from "../utils/types/interface";
import axios from "axios";
import { dataProps } from "../utils/types/interfaceData";

export const useFecth = () => {
  const [dataMovie, setData] = useState<MoviesData[]>([]);

  const fecthFilmes = async (search: dataProps) => {
    const URL = `https://api.themoviedb.org/3/search/multi`;
    const PARAMS = {
      api_key: "74e7143baeb0d85b8d30aa4cf82a390c",
      query: search.name,
      include_adult: false,
      language: "en-US",
      page: 1,
    };

    try {
      const response = await axios.get<MovieDataApi>(URL, { params: PARAMS });
      const { results, page } = response.data;
      setData(results);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  return { dataMovie, fecthFilmes };
};
