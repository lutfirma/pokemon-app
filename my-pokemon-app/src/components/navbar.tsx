import React from "react";
import PokeBall from "@/assets/image/pokeball.png";

const Navbar = () => {
  return (
    <nav
      className="sm: container w-full 
    bg-slate-950 
    flex 
    mx-auto 
    items-center
    justify-center
    "
    >
      <p className="text-white">Poke</p>
      <img src={PokeBall} alt="Poke Ball" className="w-20 h-20" />
      <p className="text-white">Ball</p>
    </nav>
  );
};

export default Navbar;
