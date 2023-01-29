import Component from "./components/Component/Component.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import CardComponent from "./components/MainComponent/CardComponent.js";
import getPokemons from "./dataPokemon/GetPokemon/GetPokemons.js";

const allPokeballs = await getPokemons(10);

const { body } = document;

const header = new HeaderComponent(body, "main-title", "header");
header.render();

const pokemonList = new Component(body, "pokemonList", "article");
pokemonList.render();

(async () => {
  const allPokeballs = await getPokemons(10);
  const selectedPokemons = allPokeballs.map((selectedPokemon) => {
    const card = new CardComponent(pokemonList.element, selectedPokemon);
    card.render();
    return card;
  });
})();
