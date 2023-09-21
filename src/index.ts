import * as components from "./components/export";
import "./components/nav/nav";

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const myNav = this.ownerDocument.createElement("my-nav");
            this.shadowRoot.appendChild(myNav);

        }
    }
}

customElements.define("app-container",AppContainer);