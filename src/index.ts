import * as components from "./components/export";
import "./components/export"
import "./screens/main"
import "./screens/Landing"
import "./screens/SignIn"
import "./screens/SignUp"
import "./screens/upload"
import { addObserver, appState } from "./store/index";
import { screens } from "./types/navigation";


class AppContainer extends  HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            switch (appState.screen) {
                case screens.LANDING :
                const something = this.ownerDocument.createElement("landing-container") // main-container / landing-container / signin-container / signup-container / upload-container
                this.shadowRoot?.appendChild(something)

                    break;

                    case screens.PROFILE :
                    this.shadowRoot.innerHTML = `Perfil`

                        break;

                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;