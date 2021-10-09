const Hero = () => {
  return (
    <div className="px-2 md:px-0 shadow-md h-screen w-full bg-primary flex-col-reverse md:flex-row flex justify-center md:justify-evenly items-center mt-[-20px] md:mt-[-100px] transform skew-y-6 md:pt-20">
      <div className="w-full md:w-1/3 transform -skew-y-6">
        <h1
          className="text-2xl md:text-5xl font-body font-bold text-white text-center md:text-left
        "
        >
          OFFICE NOTARIAL DE MAITRE ADAMOU ZOUADAI
        </h1>
        <p className=" opacity-75 text-white mt-11 font-body text-center md:text-left">
          Nous contribuons à la réalisation de la plupart de vos projets en vous
          écoutant, en vous conseillant et en préparant des documents conformes
          à la loi et à vos volontés pour éviter d’avoir à vivre des situations
          problématiques ou conflictuelles
        </p>
      </div>
      <img
        src="/hero_blue.jpg"
        alt=""
        className="w-full md:w-1/2 transform -skew-y-6"
      />
    </div>
  );
};

export default Hero;
