import { fetchPokemonOfType } from "@/lib/data/types";
import { PokemonType } from "@/lib/interfaces";
import PokemonCard from "./PokemonCard";


export default async function TypeList({ pokemonType }: { pokemonType: string }) {
    const pokemon = await fetchPokemonOfType(pokemonType)

    return (
        <div className="flex flex-wrap flex-row justify-center">
           {pokemon && pokemon.map(p => (
               <PokemonCard key={p.id} pokemon={p} />
           ))}
        </div>
    );
}
