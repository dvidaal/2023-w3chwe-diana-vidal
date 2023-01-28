import HeaderComponent from "./components/Component/HeaderComponent.js";
import getPokemons from "./dataPokemon/GetPokemon/GetPokemons.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";
const limitPokemons = "?offset=20&limit=10";
export const totalPokemons = `${apiUrl}${limitPokemons}`;

await getPokemons(totalPokemons);

const { body } = document;

const header = new HeaderComponent(body, "main-title", "header");
header.render();
