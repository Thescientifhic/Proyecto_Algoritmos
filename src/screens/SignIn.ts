import "../components/export";
import { addObserver, dispatch } from "../store/index";



class SignInContainer extends HTMLElement {
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

        const logins = this.ownerDocument.createElement("app-signin");
        this.shadowRoot.appendChild(logins);

    }
  }
}

customElements.define("signin-container", SignInContainer);
export default SignInContainer;
