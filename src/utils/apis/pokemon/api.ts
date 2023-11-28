import axiosWithConfig from "../axiosWithConfig";
import { Pokemon } from "./types";
import axios from "axios";

export const getDetailPokemon = async (id_pokemon: string) => {
  try {
    const response = await axiosWithConfig.get(
      `https://pokeapi.co/api/v2/pokemon/${id_pokemon}`
    );

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
