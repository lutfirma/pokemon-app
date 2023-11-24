import { Response, PayloadPagination } from "@/utils/types/api";
import { Pokemon } from "./types";
import axios from "axios";

export const getPokemon = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return response.data as Response<PayloadPagination<Pokemon[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
