import HomeImages from "@/assets/image/home.png";
import MyPokeball from "@/assets/image/pokeball.png";

const Footer = () => {
  return (
    <footer
      className="sm:container 
      bg-slate-950
      w-full
      h-20
    text-white
      grid
      grid-cols-2
      justify-items-center
      text-center
      py-5
      gap-4
    "
    >
      <div className=" ">
        <img src={HomeImages} alt="" className="h-8 w-8 mx-auto" />
        <p>Home</p>
      </div>
      <div className="">
        <img src={MyPokeball} alt="" className="h-8 w-8 mx-auto" />
        <p>My Pokemon</p>
      </div>
    </footer>
  );
};

export default Footer;
