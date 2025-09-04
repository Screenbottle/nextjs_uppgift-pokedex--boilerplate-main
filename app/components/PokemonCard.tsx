import React from "react";
import { Pokemon } from "@/lib/interfaces";
import { typeColour } from "@/lib/util";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {


  return (
    <div className="max-w-sm max-h-min rounded overflow-hidden shadow-lg rounded-xl border-5 border-blue-400 bg-sky-100">
      <img className={`w-2xs rounded-full border-4 m-8 bg-white`} src={pokemon.image} alt={pokemon.name} style={{ borderColor: `var(${typeColour(pokemon.types[0])})` }} />
      <div className="px-6 py-4">
        <div className="flex flex-col justify-center text-center">
          <div className={`px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full mx-auto`} style={{ backgroundColor: `var(${typeColour(pokemon.types[0])})` }}>#{pokemon.id}</div>
          <div className="text-2xl mb-2 font-jersey">{capitalizeFirstLetter(pokemon.name)}</div>
          <div className="mb-4 flex flex-row content-center gap-2 mx-auto">
            {handleTypes(pokemon.types)}
          </div>
        </div>

        <ul>
          <li className="font-bold font-jaldi">HP: {pokemon.stats.hp}</li>
          <li className="font-bold font-jaldi">Attack: {pokemon.stats.attack}</li>
          <li className="font-bold font-jaldi">Defense: {pokemon.stats.defense}</li>
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
        className={`px-2 py-1 text-sm font-semibold font-jaldi text-white rounded-full`}
        style={{ backgroundColor: `var(${typeColour(type)})` }}
      >
        {capitalizeFirstLetter(type)}
      </span>
    ))
  );
}


function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}