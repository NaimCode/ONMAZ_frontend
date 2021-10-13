import { useInView } from "react-intersection-observer";
import React from "react";
const Hero = () => {
  const [refRight, inViewRight] = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [refLeft, inViewLeft] = useInView({
    delay: 100,
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="px-2 md:px-0 shadow-md h-screen w-full bg-primary flex-col-reverse md:flex-row flex justify-center md:justify-evenly items-center mt-[-20px] md:mt-[-100px] transform skew-y-6 md:pt-20">
      <div className=" w-full md:w-1/3 transform -skew-y-6">
        <span
          ref={refLeft}
          className={`${
            inViewLeft && "animate-bottomOp2"
          } text-2xl md:text-5xl font-body font-bold text-white text-center md:text-left
        `}
        >
          OFFICE NOTARIAL DE MAITRE ADAMOU ZOUADAI
        </span>
        <p
          ref={refLeft}
          className={`${
            inViewLeft && "animate-bottomOp2"
          } opacity-75 text-white mt-11 font-body text-center md:text-left`}
        >
          Nous contribuons à la réalisation de la plupart de vos projets en vous
          écoutant, en vous conseillant et en préparant des documents conformes
          à la loi et à vos volontés pour éviter d’avoir à vivre des situations
          problématiques ou conflictuelles
        </p>
      </div>
      <div className="w-full md:w-1/2 transform -skew-y-6">
        <img
          ref={refRight}
          src="/hero_blue.jpg"
          alt=""
          className={`${
            inViewRight && "animate-bottomOp1"
          } object-contain w-full `}
        />
      </div>
    </div>
  );
};

export default Hero;
