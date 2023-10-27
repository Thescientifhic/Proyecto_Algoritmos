import "../components/export";



class SignUpContainer extends HTMLElement {
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

        const signup = this.ownerDocument.createElement("app-signup");
        this.shadowRoot.appendChild(signup);

    }
  }
}

customElements.define("signup-container", SignUpContainer);
export default SignUpContainer;