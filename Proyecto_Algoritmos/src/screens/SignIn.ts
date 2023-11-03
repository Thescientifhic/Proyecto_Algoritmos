import "../components/export";



class SignInContainer extends HTMLElement {
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

        const logins = this.ownerDocument.createElement("app-signin");
        this.shadowRoot.appendChild(logins);

    }
  }
}

customElements.define("signin-container", SignInContainer);
export default SignInContainer;
