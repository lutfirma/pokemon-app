import { Link } from "react-router-dom";

import PokeBall from "@/assets/image/pokeball.png";

const Navbar = () => {
  return (
    <nav
      className="sm: container w-full
    bg-slate-900 
    sticky
    top-0
    z-50"
    >
      <div className="flex justify-center gap-1">
        <p className="font-bold my-auto text-white">POKE</p>
        <Link to={"/"}>
          <img src={PokeBall} alt="Poke Ball" className="w-20 h-20" />
        </Link>
        <p className="font-bold my-auto text-white">BALL</p>
        <div className="absolute right-28 py-5"></div>
      </div>
    </nav>
  );
};

export default Navbar;
