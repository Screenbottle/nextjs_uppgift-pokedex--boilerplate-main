export function test() {
  return "test";
}

export function randomPokemonId() :number {
  return Math.floor(Math.random() * 1025) + 1; // There are currently 1025 Pokémon in the Pokédex
}


export function typeColour(type: string) {
  switch (type) {
    case "normal":
      return "--normal";
    case "fire":
      return "--fire";
    case "fighting":
      return "--fighting";
    case "water":
      return "--water";
    case "flying":
      return "--flying";
    case "grass":
      return "--grass";
    case "poison":
      return "--poison";
    case "electric":
      return "--electric";
    case "ground":
      return "--ground";
    case "psychic":
      return "--psychic";
    case "rock":
      return "--rock";
    case "ice":
      return "--ice";
    case "bug":
      return "--bug";
    case "dragon":
      return "--dragon";
    case "ghost":
      return "--ghost";
    case "dark":
      return "--dark";
    case "steel":
      return "--steel";
    case "fairy":
      return "--fairy";
    case "stellar":
      return "--stellar";
    default:
      return "--unknown";
  }
}
