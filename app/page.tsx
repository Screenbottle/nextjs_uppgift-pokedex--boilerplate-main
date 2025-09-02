import Image from "next/image";
import Loading from "./loading";
import PokemonCard from "./components/PokemonCard";

import { randomPokemonId } from "@/lib/util";
import React from "react";
import { Pokemon } from "@/lib/interfaces";
import FeaturedList from "./components/FeaturedList";
import RandomPokemon from "./components/RandomPokemon";

export default function Home() {
  
  

  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <RandomPokemon />
      </section>

      <div className="flex flex-col mt-8 gap-4 bg-linear-to-r [background-image:linear-gradient(-50deg,_#C97FE4,_#AECDF6)] p-14">
        <h2 className="text-4xl text-center">Featured Pokémon</h2>
        {<FeaturedList />}
      </div>
    </main>
  );
}


