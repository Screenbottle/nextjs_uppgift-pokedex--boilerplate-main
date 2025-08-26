import { Pokemon } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getRandomPokemon } from "@/lib/data/pokemon";

export default function FeaturedList() {
  const [featured, setFeatured] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchFeatured() {
      const pokemons = await getFeaturedPokemon();
      setFeatured(pokemons);
    }
    fetchFeatured();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {featured.map((pokemon) => (
        <div key={pokemon.id} className="m-4">
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}

async function getFeaturedPokemon(): Promise<Pokemon[]> {
  const featured: Pokemon[] = [];
  for (let i = 0; i < 5; i++) {
    const pokemon = await getRandomPokemon();
    if (pokemon) {
      featured.push(pokemon);
    }
  }
  return featured;
}
