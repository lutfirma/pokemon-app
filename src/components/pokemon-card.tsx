import { Link } from "react-router-dom";
import { Pokemon } from "@/utils/apis/pokemon";

interface Props {
  pokemon: any;
  loading: boolean;
}
const PokemonCard = (props: Props) => {
  const { pokemon, loading } = props;
  // console.log(pokemon);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item: any, index: any) => {
          return (
            <Link
              className="lg:w-[30rem] lg:h-[15rem] border-4 rounded-lg justify-items-center text-center gap-4 bg-slate-700"
              key={index}
              to={"/detail"}
            >
              <img
                src={item.sprites.front_default}
                alt=""
                className="w-[13rem] h-[12.5rem] mx-auto"
              />
              <p className="text-white font-bold py-1 bg-slate-800 rounded-sm">
                {item.name.toUpperCase()}
              </p>
            </Link>
          );
        })
      )}
    </>
  );
};

export default PokemonCard;

// <div className="w-[25rem] border-4 rounded-lg justify-items-center text-center gap-4 py-20 bg-slate-500">
//   <p className="text-white font-black">{data.name.toUpperCase()}</p>

// </div>
