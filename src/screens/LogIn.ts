import "../components/export";



class LogInContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }



  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';

        const login = this.ownerDocument.createElement("app-login");
        this.shadowRoot.appendChild(login);

    }
  }
}

customElements.define("login-container", LogInContainer);
export default LogInContainer;
