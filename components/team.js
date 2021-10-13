import { useInView } from "react-intersection-observer";
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
  const [refRight, inViewRight, entryRight] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const [refLeft, inViewLeft, entryLeft] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const [refBot, inViewBot, entryBot] = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div
            ref={refLeft}
            className={`${
              inViewLeft ? "animate-leftOp1" : "opacity-0"
            } flex flex-col md:max-w-3xl w-full mb-20  text-center md:text-left`}
          >
            <h1 class=" sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              NOTRE EQUIPE
            </h1>
            <p ref={refLeft} class={`text-lg opacity-75  mt-11 font-body`}>
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

          <div class="py-4 md:py-11 flex flex-col sm:flex-row">
            <div
              ref={refRight}
              class={`${
                inViewRight ? "animate-rightOp1" : "opacity-0"
              } sm:w-1/3 text-center sm:pr-8 sm:py-8`}
            >
              <div class=" rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="maitre.jpg"
                  alt=""
                  className="w-48 h-48 rounded-full shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Maître Adamou Zouadaï
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base max-w-[200px]">
                  Notaire au ressort de la Cour d'appel de N'Djaména
                </p>
              </div>
            </div>
            <div
              ref={refRight}
              className={`${
                inViewRight ? "animate-rightOp2" : "opacity-0"
              } sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col justify-center`}
            >
              <h2 className="text-xl text-black mb-3">
                Comment et quand est venue l’idée de créer un site internet ?
              </h2>
              <p class="leading-relaxed mb-4">
                "Par curiosité au départ ! Je me suis dit qu’un notaire devait
                communiquer et qu’il fallait qu’il sorte « de sa zone de confort
                » pour se faire connaître ou pour entretenir un réseau de
                relations. Plus précisément, je me suis dit qu’il fallait
                profiter de ce formidable outil qui est l'internet, afin de
                permettre aux gens, notamment les tchadiens en particulier, de
                s'imprégner de ce domaine qui reste aujourd'hui moins connu et
                très complexe.
                <br />
                <br /> Et à cette occasion, je me suis rendu compte qu’il
                fallait créé un environnement d’informations juridiques afin que
                les visiteurs sachent à quel point ce domaine d'activité reste
                toutefois intéressant.
              </p>
            </div>
          </div>

          <div
            ref={refBot}
            class={`${
              inViewBot ? "animate-bottomOp2" : "opacity-0"
            } flex flex-wrap -m-2`}
          >
            {listTeammate.map((t) => (
              <div
                key={listTeammate.indexOf(t)}
                class="p-3 lg:w-1/3 md:w-1/2 w-full transition duration-300 hover:scale-110"
              >
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
