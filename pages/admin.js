const Admin = () => {
  return (
    <div>
      <div className="container mx-auto py-24 px-2">
        <div className="w-full md:w-1/2 text-center mx-auto">
          <h1
            className="text-2xl md:text-5xl font-body font-bold  
        "
          >
            ADMINISTRATEUR
          </h1>
          <p className=" opacity-75  mt-11 font-body">
            Dans cette page vous allez pouvoir modifier et ajouter les données
            du site
          </p>
        </div>
        <div className="flex justify-center items-start gap-8 py-8">
          <div className="w-1/2"></div>

          <div className="w-1/3  border-gray-300 pl-4 border-l-2 flex flex-col">
            <form action="">
              <input type="file" name="image" accept="image/*" />

              <input
                type="text"
                placeholder="Donner un titre"
                name="title"
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              />
              <textarea
                placeholder="Donner une description"
                name="description"
                className="flex items-center h-36 py-2 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              />
              <div className="cursor-pointer transition duration-300 hover:shadow-xl hover:bg-yellow-500 p-3 bg-yellow-400 text-xl w-auto text-center rounded-md mt-4">
                Ajouter
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
