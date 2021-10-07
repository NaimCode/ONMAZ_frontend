const About = () => {
  return (
    <div className=" w-full flex justify-evenly items-center mb-20 mt-24">
      <img src="/logo_large.png" alt="" className="h-auto" />
      <div className="w-1/2 ">
        <h1 className="text-5xl font-body font-bold  text-black ">
          A PROPOS DE NOUS
        </h1>
        <div className="opacity-40 text-lg  text-black mt-11 font-body">
          <p>
            Situé sur l'avenue Mobutu, non loin de rond-point Fontaine de
            l'Union en face de CFAO-Motors , l’Office Notarial de Maître Adamou
            Zouadaï rassemble six collaborateurs autour d'un notaire stagiaire.
          </p>

          <p className="my-2">
            La fusion des compétences et spécialisations de notre équipe permet
            de vous apporter une expertise reconnue tant pour les actes courants
            que pour les opérations complexes dans le conseil patrimonial, le
            droit de la famille que dans les domaines de l’immobilier, de
            l’entreprise et des sociétés.
          </p>
          <p>
            Toutes ces compétences nous permettent d’accompagner au plus près
            les entreprises, les familles et toutes personnes à chaque étape
            essentielle de la vie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
