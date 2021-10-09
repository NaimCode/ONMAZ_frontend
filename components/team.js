import TouchCarousel from "react-touch-carousel";
const listTeammate = [
  {
    nom: "Rolande Allatessem Yorongar",
    function: "Assistante de Direction",
    image: "rolande.jpg",
  },
  {
    nom: "Sylvere",
    function: "Clerc formaliste",
    image: "sylvere.jpg",
  },
  {
    nom: "Mahamat Djimet Adamou",
    function: "Clerc rédacteur",
    image: "djimet.jpg",
  },
  {
    nom: "Vimarata Germaine",
    function: "Clerc rédacteur",
    image: "germaine.jpg",
  },
  {
    nom: "Tchindébé Fauba Luc",
    function: "Clerc rédacteur",
    image: "luc.jpg",
  },
  {
    nom: "Ndonodji Marie-Regina",
    function: "Notaire-stagiaire",
    image: "marie.jpg",
  },
];
const Team = () => {
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col md:max-w-3xl w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              NOTRE EQUIPE
            </h1>
            <p className="text-lg opacity-75  mt-11 font-body">
              La fusion des compétences et spécialisations de notre équipe
              permet de vous apporter une expertise reconnue tant pour les actes
              courants que pour les opérations complexes dans le conseil
              patrimonial, le droit de la famille que dans les domaines de
              l’immobilier, de l’entreprise et des sociétés.
              <br />
              <br />
              Toutes ces compétences nous permettent d’accompagner au plus près
              les entreprises, les familles et toutes personnes à chaque étape
              essentielle de la vie.
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            {listTeammate.map((t) => (
              <div key={listTeammate.indexOf(t)} class="p-3 lg:w-1/3 md:w-1/2 w-full transition duration-300 hover:scale-110">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={t.image}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      {t.nom}
                    </h2>
                    <p class="text-gray-500">{t.function}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
