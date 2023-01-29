import Component from "../Component/Component.js";

class MainComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<article class="pokemonCard"></article>`;
  }
}

export default MainComponent;
