import type { PokemonStructure } from "./types.js";

const getPokemons = async (url: string) => {
  const response = await fetch(url);

  const pokemonInfo = (await response.json()) as PokemonStructure;

  return pokemonInfo;
};

export default getPokemons;
