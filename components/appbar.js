import { GoLaw } from "react-icons/go";
import router from "next/router";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
const menu = [
  {
    titre: "Accueil",
    route: "/",
  },
  {
    titre: "Blogs",
    route: "/blogs",
  },
  {
    titre: "Prendre rendez-vous",
    route: "/rendez-vous",
  },
  {
    titre: "Equipe",
    route: "/equipe",
  },
];
const Appbar = () => {
  const [menuMobile, setmenuMobile] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full backdrop-filter backdrop-blur-3xl bg-primary bg-opacity-60`}
    >
      <div className="container mx-auto px-4 md:px-3 py-1 h-16 flex justify-between items-center">
        <span className="filter flex items-end font-bold font-body text-2xl text-white drop-shadow-xl">
          <GoLaw className="text-4xl drop-shadow-2xl mr-1 text-yellow-400 " />
          ONMAZ
        </span>
        <div
          onClick={() => {
            console.log("Click");
            setmenuMobile(!menuMobile);
          }}
          className=" cursor-pointer"
        >
          {menuMobile ? (
            <HiOutlineX className="md:hidden text-white text-3xl drop-shadow-2xl" />
          ) : (
            <HiMenuAlt2 className="md:hidden text-white text-3xl drop-shadow-2xl" />
          )}
        </div>
        <div className="hidden md:flex items-center gap-7">
          {menu.map((m) => (
            <div
              key={menu.indexOf(m)}
              onClick={() => router.push(m.route)}
              className="cursor-pointer filter  font-body text-base transition duration-300 text-white drop-shadow-lg hover:font-body hover:scale-110"
            >
              {m.titre}
            </div>
          ))}
        </div>
        <div
          onClick={() => router.push("/contact")}
          className=" hidden md:flex cursor-pointer px-2 py-1 rounded-lg font-title font-bold text-lg bg-yellow-400 transition duration-300 hover:drop-shadow-xl hover:bg-yellow-500 "
        >
          Contactez-nous
        </div>
      </div>
      <div
        className={`${
          !menuMobile ? "hidden" : ""
        } shadow-xl  h-[80vh]  transform transition duration-300 md:hidden flex flex-col justify-center items-center gap-8`}
      >
        {menu.map((m) => (
          <div
            key={menu.indexOf(m)}
            onClick={() => {
              setmenuMobile(false);
              router.push(m.route);
            }}
            className="cursor-pointer filter  font-body text-3xl transition duration-300 text-white drop-shadow-lg hover:font-body hover:scale-110"
          >
            {m.titre}
          </div>
        ))}
        <div
          onClick={() => {
            setmenuMobile(false);
            router.push("/contact");
          }}
          className="mt-11 flex cursor-pointer px-2 py-1 rounded-lg font-title font-bold text-3xl bg-yellow-400 transition duration-300 hover:drop-shadow-xl hover:bg-yellow-500 "
        >
          Contactez-nous
        </div>
      </div>
    </div>
  );
};

export default Appbar;
