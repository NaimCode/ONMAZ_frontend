const list = [1, 2, 21, 1, 1, 1, 1, , 1, 1];
const Blogs = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div className="w-full md:w-1/2 text-center mx-auto">
            <h1
              className="text-2xl md:text-5xl font-body font-bold  
        "
            >
              BLOGS
            </h1>
            <p className=" opacity-75  mt-11 font-body">
              Dans cette page vous allez trouver toutes nos nouvelles
            </p>
          </div>
          <div class="flex flex-wrap my-4 md:m-4">
            {list.map((l) => (
              <div class="group transition duration-300 hover:scale-105 overflow-hidden py-4 md:p-4 md:w-1/2">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="h-[220px] lg:h-[400px] md:h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 object-center"
                    src="full_1.jpg"
                    alt="blog"
                  />
                  <div class={`p-6 bg-primary`}>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3 text-white ">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
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

export default Blogs;
