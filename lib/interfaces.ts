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
  pokemon: PokemonTypeListItem[];
}

export interface PokemonTypeListItem {
  pokemon: PokemonShort;
  slot: number;
}

export interface fullPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
