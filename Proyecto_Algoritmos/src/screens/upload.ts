import "../components/export";



class UploadContainer extends HTMLElement {
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

      const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

      const upload = this.ownerDocument.createElement("app-upload");
        this.shadowRoot.appendChild(upload);

    }
  }
}

customElements.define("upload-container", UploadContainer);
export default UploadContainer;
