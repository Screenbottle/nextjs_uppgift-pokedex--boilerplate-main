import { Pokemon } from "@/lib/interfaces";
import PokemonCard from "./PokemonCard";
import { fetchRandomPokemon } from "@/lib/data/pokemon";

async function getFeaturedPokemon(): Promise<Pokemon[]> {
  const featured: Pokemon[] = [];
  for (let i = 0; i < 4; i++) {
    const pokemon = await fetchRandomPokemon();
    if (pokemon) {
      featured.push(pokemon);
    }
  }
  return featured;
}

export default async function FeaturedList() {
  const featured = await getFeaturedPokemon();

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
