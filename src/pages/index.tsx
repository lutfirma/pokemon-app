import Layout from "../components/layout";
import PokemonCard from "@/components/pokemon-card";
import axios from "axios";
import { Pokemon } from "@/utils/apis/pokemon";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [pokemonData, setPokemonData] = useState([]);
  // console.log(pokemonData);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokeFun = async () => {
    try {
      const result = await axios.get(url);
      setLoading(true);
      // console.log(result.data.results);
      setNextUrl(result.data.next);
      setPrevUrl(result.data.previous);
      getPokemon(result.data.results);
      setLoading(false);
      // console.log(pokemons);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemon = async (result: any) => {
    result.map(async (item: any) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokemonData((state: any) => {
        state = [...state, result.data];
        state.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));
        // console.log(getPokemon);
        return state;
      });
    });
  };

  useEffect(() => {
    getPokeFun();
  }, [url]);

  return (
    <Layout>
      {/* <div className="grid grid-cols-2 w-fit gap-5 mb-3">
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={index} data={pokemon} />
        ))}
      </div> */}
      <div className="md:container bg-slate-700 grid grid-cols-2  w-fit gap-2 lg:gap-10 py-5 justify-items-center">
        <PokemonCard pokemon={pokemonData} loading={loading} />
        <Button
          onClick={() => {
            setPokemonData([]);
            setUrl(prevUrl);
          }}
        >
          ◄ Previous{" "}
        </Button>
        <Button
          onClick={() => {
            setPokemonData([]);
            setUrl(nextUrl);
          }}
        >
          Next ►
        </Button>
      </div>
    </Layout>
  );
};

export default Index;
