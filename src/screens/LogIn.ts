import "../components/export";
import { addObserver } from "../store";
import { screens } from "../types/navigation";
import { ScreenActions } from "../types/store";
import { appState, dispatch } from "../store";


class LogInContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }



  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';

        const logins = this.ownerDocument.createElement("app-login");
        this.shadowRoot.appendChild(logins);

    }
  }
}

customElements.define("login-container", LogInContainer);
export default LogInContainer;
