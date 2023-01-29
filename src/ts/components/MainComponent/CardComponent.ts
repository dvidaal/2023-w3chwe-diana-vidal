import type { PokemonStructure } from "../../dataPokemon/GetPokemon/types.js";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  pokemon: PokemonStructure;

  constructor(
    parentElement: Element,
    pokemon: PokemonStructure,
    className = ""
  ) {
    super(parentElement, className);
    this.pokemon = pokemon;
  }

  render() {
    super.render();
    this.element.innerHTML = `<ul><li class="pokemonCard">${this.pokemon.name}<img src="${this.pokemon.sprites.other.dream_world.front_default}">Height:${this.pokemon.height} Weight:${this.pokemon.weight}</li></ul>`;
  }
}

export default CardComponent;
