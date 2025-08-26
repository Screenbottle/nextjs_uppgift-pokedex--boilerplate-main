import React from "react";
import { Pokemon } from "@/lib/interfaces";
import { typeColour } from "@/lib/util";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white rounded-xl border-5 border-blue-400 ">
      <img className={`w-2xs rounded-full border-4 m-8`} src={pokemon.image} alt={pokemon.name} style={{ borderColor: `var(${typeColour(pokemon.types[0])})` }}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{capitalizeFirstLetter(pokemon.name)}</div>
        <div className="mb-4 flex gap-2">
          {handleTypes(pokemon.types)}
        </div>
        <ul>
          <li className="font-bold">HP: {pokemon.stats.hp}</li>
          <li className="font-bold">Attack: {pokemon.stats.attack}</li>
          <li className="font-bold">Defense: {pokemon.stats.defense}</li>
        </ul>
      </div>
    </div>
  );
}

function handleTypes(types: string[]) {
  return (
    types.map((type) => (
      <span
        key={type}
        className={`px-2 py-1 text-sm font-semibold text-white rounded-full`}
        style={{ backgroundColor: `var(${typeColour(type)})`}}
      >
        {capitalizeFirstLetter(type)}
      </span>
    ))
  );
}


function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}