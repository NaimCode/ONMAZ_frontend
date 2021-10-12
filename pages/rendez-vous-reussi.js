import router from "next/router";
const RVR = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-primary p-4 filter drop-shadow-2xl">
      <div className="max-w-md flex items-center flex-col justify-center">
        <img src="sended.svg" alt="" className="w-full" />
        <h1 className="text-2xl md:text-3xl text-center opacity-80 text-white  font-title font-semibold py-5">
          Votre prise de rendez-vous a été effectuée avec succès !
        </h1>
        <div
          onClick={() => router.push("/")}
          className=" cursor-pointer transition duration-300 hover:shadow-2xl hover:bg-yellow-500 hover:scale-105 w-20 h-20 rounded-full shadow-xl flex items-center justify-center bg-yellow-400 font-bold font-logo text-2xl"
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default RVR;
