export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
}

export interface PokemonShort {
  name: string;
  url: string;
}

export interface PokemonType {
  id: number;
  name: string;
  pokemon: PokemonShort[];
}


