import type { PokemonStructure } from "./types.js";

const getPokemons = async (id: number): Promise<PokemonStructure[]> => {
  const catchPokemons = [];

  for (let i = 1; i <= id; i++) {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    catchPokemons.push(response);
  }

  const catchAllPokemons = await Promise.all(catchPokemons);
  const releasePokemons = catchAllPokemons.map(async (releasePokemon) =>
    releasePokemon.json()
  );
  const pokemonInfo = (await Promise.all(
    releasePokemons
  )) as PokemonStructure[];

  return pokemonInfo;
};

export default getPokemons;
