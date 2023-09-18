export interface Pokemon {
  id: number;
  name: String;
  sprites: {
    front_default: string;
  };
}

export interface PokemonDetail extends Pokemon {
  abilities?: {
    ability: string;
    name: string;
  }[];
}
