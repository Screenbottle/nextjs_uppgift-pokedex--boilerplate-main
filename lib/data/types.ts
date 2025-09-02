import { Pokemon, PokemonType } from "../interfaces";
import { fetchPokemonByUrl } from "./pokemon";

export async function fetchPokemonOfType(type: string): Promise<Pokemon[] | null> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon by type");
        const data = await response.json();

        const typeData = {
            id: data.id,
            name: data.name,
            pokemon: data.pokemon.map((p: any) => ({
                name: p.pokemon.name,
                url: p.pokemon.url
            })),
        };

        return await Promise.all(
            typeData.pokemon.map(async (p: { name: string; url: string }) => {
                const pokemon = await fetchPokemonByUrl(p.url);
                return pokemon;
            })
        );

    } catch (error) {
        console.error(error);
        return null;
    }
}


