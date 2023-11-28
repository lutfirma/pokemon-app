import { Link } from "react-router-dom";

import HomeImages from "@/assets/image/home.png";
import MyPokeball from "@/assets/image/pokeball.png";

const Footer = () => {
  return (
    <footer
      className="sm:container 
      bg-slate-900
      w-full
      h-20
    text-white
      grid
      grid-cols-2
      justify-items-center
      text-center
      py-5
      gap-4
      sticky
      bottom-0
      z-50
    "
    >
      <div className="">
        <Link to={"/"}>
          <img src={HomeImages} alt="" className="h-8 w-8 mx-auto" />
          <p>Home</p>
        </Link>
      </div>
      <div className="">
        <img src={MyPokeball} alt="" className="h-8 w-8 mx-auto" />
        <p>My Pokemon</p>
      </div>
    </footer>
  );
};

export default Footer;
