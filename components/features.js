import { useInView } from "react-intersection-observer";

const listFeatures = [
  {
    titre: "Immobilier",
    svg: "/immobilier.svg",
  },
  {
    titre: "Famille",
    svg: "/famille.svg",
  },

  {
    titre: "Entreprise",
    svg: "/buniness.svg",
  },
  {
    titre: "Urbanisme",
    svg: "/urbanisme.svg",
  },
];
const Features = () => {
  const [refRight, inViewRight, entryRight] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const [refLeft, inViewLeft, entryLeft] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (
    <div className="pt-9 pb-5 md:py-0 px-2 md:px-0 shadow-2xl-full w-full md:h-screen  skew-y-6 bg-yellow-400 flex flex-col md:flex-row items-center justify-center md:justify-around">
      <div className="w-full md:w-1/3 transform -skew-y-6">
        <h1
          ref={refLeft}
          className={`${
            inViewLeft ? "animate-leftOp1" : "opacity-0"
          } md:text-3xl text-2xl font-medium title-font text-white text-center md:text-left `}
        >
          NOS DOMAINES D'INTERVENTIONS
        </h1>
        <p
          ref={refLeft}
          className={`${
            inViewLeft ? "animate-leftOp2" : "opacity-0"
          } text-lg opacity-75 text-white mt-4 md:mt-11 font-body text-center md:text-left`}
        >
          En tant que notaire, nous intervenons dans tous les domaines du droit,
          comme le droit de la famille, de l’immobilier, du patrimoine...
          <br /> Nous faire appel pour rédiger vos documents légaux c’est donc
          avantageux et prudent. Nous participons également aux démarches lors
          de l’achat ou la vente de votre propriété, préparons l’hypothèque et
          nous vous aidons à développer une stratégie de planification
          financière.
          <br /> Nous vous conseillons également dans la gestion de votre
          entreprise, rédigeons des contrats et participons également aux
          transactions commerciales, des arbitrages et des négociations
        </p>
      </div>
      <div className="mt-8 md:mt-0 w-full md:w-1/2 transform -skew-y-6 flex items-center justify-center gap-5 md:gap-9">
        <div className="w-1/2 gap-5 md:gap-9 flex flex-col mb-7">
          {listFeatures.slice(0, 2).map((f) => (
            <div
              ref={refRight}
              className={`${
                inViewRight ? "animate-rightOp2" : "opacity-0"
              } cursor-pointer w-full  bg-white py-2 rounded-lg shadow-lg transition duration-300 hover:scale-105  hover:shadow-2xl flex flex-col justify-center items-center`}
            >
              <img src={f.svg} alt="" className="object-contain h-32 md:h-72" />
              <span className="text-xl font-logo  ">{f.titre}</span>
            </div>
          ))}
        </div>
        <div className="w-1/2 gap-5 md:gap-9 flex flex-col  md:mt-7">
          {listFeatures.slice(2, 4).map((f) => (
            <div
              className={`${
                inViewRight ? "animate-rightOp2" : "opacity-0"
              } cursor-pointer w-full bg-white py-2 rounded-2xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-center items-center`}
            >
              <img
                src={f.svg}
                alt=""
                className="object-contain  h-32 md:h-72"
              />
              <span className="text-xl font-logo  ">{f.titre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
