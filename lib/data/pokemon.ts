import { Pokemon } from "../interfaces";
import { randomPokemonId } from "../util";

export async function fetchPokemonByName(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return data;
}

export async function fetchPokemonById(id: number): Promise<Pokemon> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((type: any) => type.type.name),
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
      },
    };
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokémon by ID:", error);
    throw error;
  }
}

export async function getRandomPokemon(): Promise<Pokemon> {
  let found = null;
  while (!found) {
    try {
      const pokemon = await fetchPokemonById(randomPokemonId());
      if (pokemon) {
        found = pokemon;
      }
    } catch (e: any) {
      
    }
  }
  return found;
}
    
