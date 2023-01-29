import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<img src="pokemon-logo.svg" class="logo" width="350" height="167">`;
  }
}

export default HeaderComponent;
