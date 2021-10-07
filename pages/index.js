import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Features from "../components/features";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bureau ONMAZ</title>
        <meta
          name="description"
          content="Notre meilleure garantie, c’est la satisfaction de nos clients avec un service professionnel et humain"
        />
        <link rel="icon" href="/logo_mini.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <Hero />
        <About />
        <Features />
        <div className="h-screen bg-gray-400 w-full"></div>
      </div>
    </div>
  );
}
