"use client";
import React from "react";
import { Pokemon } from "@/lib/interfaces";
import Image from "next/image";
import { fetchRandomPokemon } from "@/lib/data/pokemon";
import PokemonCard from "./PokemonCard";

export default function RandomPokemon() {
    const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);

    return (
        <div className="flex flex-col items-center">
            <button
                className="btn-primary"
                onClick={async () => {
                    const found = await fetchRandomPokemon();
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

            {pokemon && <PokemonCard pokemon={pokemon} />}
        </div>
    )


}
