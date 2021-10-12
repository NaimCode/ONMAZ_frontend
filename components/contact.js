const ContactSection = ({ setcontact }) => {
  return (
    <div className="z-50 fixed top-0 left-0 h-screen w-screen  flex items-center justify-center ">
      <div
        onClick={() => setcontact(false)}
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-black opacity-60"
      ></div>
      <div
        onClick={() => console.log("Click")}
        className="z-50 max-w-lg   rounded-xl overflow-hidden mx-4"
      >
        <img src="contact.svg" alt="" className="w-full bg-white  " />
        <div className="flex flex-row gap-1 md:gap-6 justify-evenly items-center bg-white my-3 p-2 shadow-2xl ">
          <h2 className="text-base md:text-xl text-center font-logo text-primary w-1/2 ">
            Notaire
          </h2>
          <div className="opacity-70 italic flex flex-col w-1/2">
            <span className="opacity-30">Appel/Whatsapp</span>
            <span>00212700480681</span>

            <span className="opacity-30">Email</span>
            <span>adamounotaire@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-row gap-1 md:gap-6 justify-evenly items-center bg-white p-2 shadow-2xl ">
          <h2 className="text-base md:text-xl font-logo text-primary text-center w-1/2">
            Programmeur
          </h2>
          <div className="opacity-70 italic flex flex-col w-1/2">
            <span className="opacity-30">Appel/Whatsapp</span>
            <span>00212700480681</span>

            <span className="opacity-30">Email</span>
            <span>naimdev4@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
