import * as components from "./components/export";
import "./components/export"
import "./screens/main"


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
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/index1.css")
            this.shadowRoot?.appendChild(link);
        const something = this.ownerDocument.createElement("main-container")
        this.shadowRoot?.appendChild(something)
        }
    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;