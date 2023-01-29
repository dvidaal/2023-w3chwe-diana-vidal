export interface PokemonStructure {
  name: string;
  url: string;
  height: string;
  weight: string;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface PokemonData {
  count: number;
  next: string;
  previous: string;
  results: PokemonStructure[];
}
