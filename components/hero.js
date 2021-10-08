const Hero = () => {
  return (
    <div className=" shadow-md h-screen w-full bg-primary flex justify-evenly items-center mt-[-100px] transform skew-y-6 pt-20">
      <div className="w-1/3 transform -skew-y-6">
        <h1 className="text-5xl font-body font-bold text-white ">
          OFFICE NOTARIAL DE MAITRE ADAMOU ZOUADAI
        </h1>
        <p className="text-lg opacity-75 text-white mt-11 font-body">
          Nous contribuons à la réalisation de la plupart de vos projets en vous
          écoutant, en vous conseillant et en préparant des documents conformes
          à la loi et à vos volontés pour éviter d’avoir à vivre des situations
          problématiques ou conflictuelles
        </p>
      </div>
      <img src="/hero_blue.jpg" alt="" className="w-1/2 transform -skew-y-6" />
    </div>
  );
};

export default Hero;
