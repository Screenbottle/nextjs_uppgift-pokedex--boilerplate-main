import { Pokemon, PokemonShort } from "../interfaces";
import { randomPokemonId } from "../util";

export async function fetchAllPokemon(): Promise<PokemonShort[]> {
  try {
    const respone = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
    const data = await respone.json();
    return data.results;
  }
  catch (error) {
    console.error("Error fetching all Pokémon:", error);
    throw error;
  }
}

export function matchPokemonName(pokemonList: PokemonShort[], query: string): PokemonShort[] {
  // Replace "+" with "-", remove all other special characters, replace spaces with "-"
  const normalizedQuery = query
    .replace(/\+/g, "-")
    .replace(/[^a-zA-Z0-9\- ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return pokemonList.filter(pokemon => {
    const normalizedName = pokemon.name
      .replace(/\+/g, "-")
      .replace(/[^a-zA-Z0-9\- ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    return normalizedName.includes(normalizedQuery);
  });
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
    
    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokémon by name:", error);
    throw error;
  }
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
    
    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokémon by ID:", error);
    throw error;
  }
}

export async function fetchPokemonByUrl(url: string): Promise<Pokemon> {
  try {
    
    const response = await fetch(url);
    
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

    return pokemon;
  } catch (error) {
    console.error("Error fetching Pokémon by URL:", error);
    throw error;
  }
}

export async function fetchRandomPokemon(): Promise<Pokemon> {
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
    
