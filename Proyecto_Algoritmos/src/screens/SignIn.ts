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

        const sigIn = this.ownerDocument.createElement("app-signin");
        this.shadowRoot.appendChild(sigIn);

    }
  }
}

customElements.define("signin-container", SignInContainer);
export default SignInContainer;
