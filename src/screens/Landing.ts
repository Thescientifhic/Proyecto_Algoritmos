import "../components/export";



class LandingContainer extends HTMLElement {
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

        const landing = this.ownerDocument.createElement("app-landing");
        this.shadowRoot.appendChild(landing);

    }
  }
}

customElements.define("landing-container", LandingContainer);
export default LandingContainer;
