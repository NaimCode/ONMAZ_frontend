import { useInView } from "react-intersection-observer";

const About = () => {
  const [refRight, inViewRight, entryRight] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const [refLeft, inViewLeft, entryLeft] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (
    <div className=" w-full flex flex-col md:flex-row justify-evenly items-center px-3 md:px-0 my-10 md:my-44">
      <img
        ref={refLeft}
        src="/logo_large.png"
        alt=""
        className={`${
          inViewLeft ? "animate-leftOp1 " : "opacity-0"
        } h-auto mx-auto md:-mt-24 md:mx-0 `}
      />
      <div
        ref={refRight}
        className={`${
          inViewRight ? "animate-rightOp1 md:animate-rightOp2" : "opacity-0"
        } w-full md:w-1/2 md:mb-[-40px]`}
      >
        <h1 className="mt-7 md:mt-0 md:text-3xl text-2xl font-medium title-font  text-black text-center md:text-left">
          A PROPOS DE NOUS
        </h1>
        <div className="opacity-40 text-lg  text-black mt-11 font-body text-center md:text-left">
          <p>
            Situé sur l'avenue Mobutu, non loin de rond-point Fontaine de
            l'Union en face de CFAO-Motors , l’Office Notarial de Maître Adamou
            Zouadaï rassemble six collaborateurs autour d'un notaire titulaire.
            <br />
            <br />
            Être notaire, c’est conseiller et accompagner chaque client
            consciencieusement. Cela se traduit par la rédaction d’actes
            sur-mesure. Le travail en équipe avec les autres professionnels est
            incontournable pour mener à bien le projet du client. En tant que
            notaire, il est très important de respecter les normes en vigueur,
            quelles que soient les missions confiées.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
