import Layout from "@/components/layout";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Pokemon, getDetailPokemon } from "@/utils/apis/pokemon";
import { AlertCircleIcon } from "lucide-react";
import { resolve } from "path";
import { useEffect, useState } from "react";

const PokemonDetail = () => {
  const [pokemons, setPokemons] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailPokemon("1");
      // console.log(result);
      setPokemons(result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCatch = async () => {
    setIsLoading(true);
    const random = Math.floor(Math.random() * 10);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (random <= 5) {
          resolve("Success");
          alert("Success");
        } else {
          reject("Failed");
          alert("Failed");
        }
      }, 1000);
    });
  };

  return (
    <Layout>
      <div className="md:container flex flex-row bg-slate-700 w-full gap-2 lg:gap-10 py-5 grow justify-center">
        <div className="lg:w-[20rem] lg:h-[17rem] border-4 rounded-lg justify-items-center text-center gap-4">
          <img
            src={pokemons?.sprites.front_default}
            alt={pokemons?.name}
            className="w-[11rem] mx-auto"
          />
          {pokemons?.types.map((pokemon: any, i: any) => (
            <p
              className="text-white bg-slate-400 font-bold py-[5px] my-[0.36rem]"
              key={i}
            >
              {pokemon.type.name.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="lg:w-[20rem] lg:h-[17rem] border-4 rounded-lg justify-items-center text-center gap-4">
          <p className="text-white  bg-slate-400 font-bold my-[0.6rem] text-start ps-4 py-[5px]">
            Name : {pokemons?.name.toUpperCase()}
          </p>
          <p className="text-white  bg-slate-400 font-bold my-[0.6rem] text-start ps-4 py-[5px]">
            Weight : {pokemons?.weight}
          </p>
          <p className="text-white  bg-slate-400 font-bold my-[0.6rem] text-start ps-4 py-[5px]">
            Height : {pokemons?.height}
          </p>
        </div>
        <div className="lg:w-[20rem] lg:h-[17rem] border-4 rounded-lg justify-items-center text-center gap-4">
          {pokemons?.stats.map((pokemon: any, i: any) => (
            <p
              className="text-white  bg-slate-400 font-bold my-[0.6rem] text-start ps-4 py-[5px]"
              key={i}
            >
              {pokemon.stat.name.toUpperCase()} : {pokemon.base_stat}
            </p>
          ))}
        </div>
      </div>
      <div className="md:container flex flex-row bg-slate-700 w-full gap-2 lg:gap-10 py-5 grow justify-center">
        <div className="lg:w-[20rem] lg:h-[17rem] border-4 rounded-lg justify-items-center text-center gap-4">
          {pokemons?.moves.slice(0, 6).map((item: any, i: any) => (
            <p
              className="text-white  bg-slate-400 font-bold my-[0.6rem] text-start ps-4 py-[4px]"
              key={i}
            >
              {item.move.name}
            </p>
          ))}
          <Button className="mt-5" onClick={handleCatch}>
            CATCH
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonDetail;
