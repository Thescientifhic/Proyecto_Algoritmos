import * as components from "./components/export";
import "./components/export"
import "./screens/Profile"
import "./screens/main"
import "./screens/Landing"
import "./screens/SignIn"
import "./screens/SignUp"
import "./screens/upload"
import { addObserver, appState } from "./store/index";
import { screens } from "./types/navigation";


class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
    }

    connectedCallback() {
        this.render()   
    }

    render() {
        if (this.shadowRoot) {
            switch (appState.screen) {
                case screens.MAIN:
                    this.shadowRoot.innerHTML = ``
                    const something = this.ownerDocument.createElement("main-container") // main-container / landing-container / signin-container / signup-container / upload-container
                    this.shadowRoot?.appendChild(something)
                    break;

                case screens.EDIT_PROFILE:
                     this.shadowRoot.innerHTML = 'Edit Profile';
                    break;

                case screens.MESSAGE:
                    this.shadowRoot.innerHTML = 'Message';
                    break;

                case screens.NEW_POST:
                    this.shadowRoot.innerHTML = ``
                    const post = this.ownerDocument.createElement("app-upload")
                    this.shadowRoot?.appendChild(post)
                    break;

                case screens.PROFILE:
                    this.shadowRoot.innerHTML = ``
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