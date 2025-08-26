"use client"
import Image from "next/image";
import Loading from "./loading";
import PokemonCard from "./components/PokemonCard";
import { fetchPokemonById, fetchPokemonByName, getRandomPokemon } from "@/lib/data/pokemon";
import { randomPokemonId } from "@/lib/util";
import React, { useEffect } from "react";
import { Pokemon } from "@/lib/interfaces";
import FeaturedList from "./components/FeaturedList";

export default function Home() {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  

  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <button
          className="btn-primary"
          onClick={async () => {
            const found = await getRandomPokemon();
            setPokemon(found);
          }}
        >
          <Image
            src="/Dice.svg"
            width={25}
            height={25}
            alt="Dice"
          />
          Random Pokémon</button>
      </section>

      <div className="flex justify-center m-8 content-evenly">
        {pokemon ? <PokemonCard pokemon={pokemon} /> : <FeaturedList />}
      </div>
    </main>
  );
}


