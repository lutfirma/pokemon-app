import Layout from "../components/layout";
import PokemonCard from "@/components/pokemon-card";

const Index = () => {
  return (
    <Layout>
      <div className="sm: container w-full bg-slate-400 grow">
        <PokemonCard />
      </div>
    </Layout>
  );
};

export default Index;
