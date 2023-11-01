import * as components from "./components/export";
import "./components/export"
import "./screens/main"
import { addObserver, appState } from "./store/index";
import { screens } from "./types/navigation";


class AppContainer extends  HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot){
            switch (appState.screen) {
                case screens.MAIN : 
                const something = this.ownerDocument.createElement("main-container")
                this.shadowRoot?.appendChild(something)

                break;

                case screens.PROFILE : 
                this.shadowRoot.innerHTML = `Perfil`
                const profile1 = this.ownerDocument.createElement("my-profile")
                this.shadowRoot?.appendChild(profile1)
    
                    break;    
            
                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;