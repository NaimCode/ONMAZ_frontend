const About = () => {
  return (
    <div className=" w-full flex justify-evenly items-center my-44">
      <img src="/logo_large.png" alt="" className="h-auto mt-[-80px]" />
      <div className="w-1/2 mb-[-40px]">
        <h1 className="sm:text-3xl text-2xl font-medium title-font  text-black ">
          A PROPOS DE NOUS
        </h1>
        <div className="opacity-40 text-lg  text-black mt-11 font-body">
          <p>
            Situé sur l'avenue Mobutu, non loin de rond-point Fontaine de
            l'Union en face de CFAO-Motors , l’Office Notarial de Maître Adamou
            Zouadaï rassemble six collaborateurs autour d'un notaire stagiaire.
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
