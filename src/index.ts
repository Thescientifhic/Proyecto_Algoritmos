import * as components from "./components/export";
import "./components/export"
import "./screens/main"
import "./components/nav/nav";

class AppContainer extends  HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

        const something = this.ownerDocument.createElement("main-container")
        this.shadowRoot?.appendChild(something)
        }
    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;