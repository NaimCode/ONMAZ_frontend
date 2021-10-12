const ContactSection = ({ setcontact, contact }) => {
  return (
    <div
      onClick={() => setcontact(false)}
      className="z-50 fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 flex items-center justify-center "
    >
      <div className="max-w-lg  shadow-2xl rounded-xl overflow-hidden mx-4">
        <img src="contact.svg" alt="" className="w-full bg-white" />
        <div className="flex flex-row gap-6 justify-evenly items-center bg-white my-3 p-2">
          <h2 className="text-xl text-center font-logo text-primary w-1/2">
            Notaire{" "}
          </h2>
          <div className="opacity-70 italic flex flex-col w-1/2">
            <span className="opacity-30">Whatsapp</span>
            <span>00212700480681</span>

            <span className="opacity-30">Email</span>
            <span>naimdev4@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-row gap-6 justify-evenly items-center bg-white p-2">
          <h2 className="text-xl font-logo text-primary text-center w-1/2">
            Programmeur
          </h2>
          <div className="opacity-70 italic flex flex-col w-1/2">
            <span className="opacity-30">Whatsapp</span>
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
