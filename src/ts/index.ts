import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import MainComponent from "./components/MainComponent/MainComponent.js";
import getPokemons from "./dataPokemon/GetPokemon/GetPokemons.js";

const allPokeballs = await getPokemons(150);

console.log(allPokeballs.map((allPokeball) => allPokeball.name));

const { body } = document;

const header = new HeaderComponent(body, "main-title", "header");
header.render();

const section = new MainComponent(body, "main-container", "section");
section.render();
