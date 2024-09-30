
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

import LoadMore from "../components/LoadMore";
// import { data } from "./_data";
import { fetchAnime } from "./action";
import Background from "../components/background/Background"
import Image from "next/image";
async function Home() {
  const data = await fetchAnime(0) 
  
  return (
     <>
    <main className="main sm:p-16 py-16 px-8 flex flex-col gap-10">
     
      <Background />
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10">
       {data}
      </section>
      <LoadMore />
    </main>
     </>
  );
}

export default Home;
