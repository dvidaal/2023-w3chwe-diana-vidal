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
    this.element.innerHTML = `<li class="pokemonCard">${this.pokemon.name}</li>`;
  }
}

export default CardComponent;
