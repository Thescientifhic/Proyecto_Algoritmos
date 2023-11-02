import "../components/export";
import { addObserver } from "../store/index";



class UploadContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  connectedCallback() {
    this.render();
  }



  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';

      const upload = this.ownerDocument.createElement("app-upload");
        this.shadowRoot.appendChild(upload);

    }
  }
}

customElements.define("upload-container", UploadContainer);
export default UploadContainer;
