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

        const logins = this.ownerDocument.createElement("app-login");
        this.shadowRoot.appendChild(logins);

    }
  }
}

customElements.define("login-container", LogInContainer);
export default LogInContainer;
