import { matchPokemonName, fetchAllPokemon, fetchPokemonByUrl } from "@/lib/data/pokemon";
import { Pokemon } from "@/lib/interfaces";
import { PokemonShort } from "@/lib/interfaces";
import PokemonCard from "../components/PokemonCard";
import SearchInput from "../components/SearchInput";


export default async function SearchResultsPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams;

    let pokemonDetails: Pokemon[] = [];
    if (query) {
        const allPokemon = await fetchAllPokemon();
        const filteredPokemon: PokemonShort[] = matchPokemonName(allPokemon, query);
        pokemonDetails = await Promise.all(filteredPokemon.map(p => fetchPokemonByUrl(p.url)));
    }

    return (
        <div>
            <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
                <h2 className="text-4xl text-center">Search Results for "{query}"</h2>
                <SearchInput />
            </section>
            
            <div className="flex flex-wrap justify-center gap-4 bg-linear-to-r [background-image:linear-gradient(-50deg,_#C97FE4,_#AECDF6)] p-14 min-h-screen">
                
                {pokemonDetails.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>

        </div>
    );
}
