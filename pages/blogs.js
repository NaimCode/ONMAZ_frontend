import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/env";
import { monthNumToString } from "../functions/converting";
import Footer from "../components/footer";
const Blogs = ({ blogs }) => {
  return (
    <div>
      <section class=" body-font">
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
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="-my-8 divide-y-2 divide-gray-100">
                {blogs.map((b) => (
                  <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start">
                      <span class="font-semibold title-font text-yellow-400 text-7xl">
                        {new Date(b.createdAt).getDate()}
                      </span>
                      <span class="mt-1 text-gray-500 text-lg">
                        {`${monthNumToString(
                          1 + new Date(b.createdAt).getMonth()
                        )}  ${new Date(b.createdAt).getFullYear()}`}
                      </span>
                    </div>
                    <div class="md:flex-grow">
                      {b.image !== "" && (
                        <img src={b.image} alt="" className="w-full md:w-3/4" />
                      )}
                      <h2 class="text-2xl font-medium text-gray-900 py-5 title-font mb-2">
                        {b.title}
                      </h2>
                      <p class="leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/blogs`);
  const data = await res.json();

  return {
    props: {
      blogs: data.reverse(),
    }, // will be passed to the page component as props
  };
}
export default Blogs;
