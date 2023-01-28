import Component from "./Component.js";

class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<img src="pokemon-logo.svg" class="logo">`;
  }
}

export default HeaderComponent;
