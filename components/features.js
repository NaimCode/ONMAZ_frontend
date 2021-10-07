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
  return (
    <div className="shadow-2xl-full w-full bg-primary  py-10">
      <div className="container mx-auto text-center">
        <span className="text-5xl font-body font-bold text-white">
          NOS DOMAINES D'INTERVENTIONS
        </span>
        <div>
          <div className="flex items-center my-9  ">
            {listFeatures.slice(0, 2).map((f) => (
              <div
                key={listFeatures.indexOf(f)}
                className="w-1/2 flex flex-col items-center cursor-pointer"
              >
                <img
                  src={f.svg}
                  alt=""
                  className="object-contain flex-grow h-56"
                />
                <span className="text-2xl opacity-80 text-white font-title">
                  {f.titre}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            {listFeatures.slice(2, 4).map((f) => (
              <div
                key={listFeatures.indexOf(f)}
                className="w-1/2  flex flex-col cursor-pointer"
              >
                <img
                  src={f.svg}
                  alt=""
                  className="object-contain  h-56 w-full text-white"
                />
                <span className="text-2xl opacity-80 text-white font-title">
                  {f.titre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
