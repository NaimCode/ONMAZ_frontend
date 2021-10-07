import { GoLaw } from "react-icons/go";
const Appbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-filter backdrop-blur-3xl ">
      <div className="container mx-auto px-3 py-1 h-16 flex justify-between items-center">
        <span className="filter flex items-end font-bold font-body text-2xl text-white drop-shadow-xl">
          <GoLaw className="text-4xl drop-shadow-2xl mr-1 text-yellow-400 " />
          ONMAZ
        </span>
        <div className=" cursor-pointer px-2 py-1 rounded-lg font-title font-bold text-lg bg-yellow-400 transition duration-300 hover:drop-shadow-xl hover:bg-yellow-500 ">
          Contactez-nous
        </div>
      </div>
    </div>
  );
};

export default Appbar;
