import * as components from "./components/export";
import "./components/export"
import "./screens/Profile"
import "./screens/main"
import "./screens/Landing"
import "./screens/SignIn"
import "./screens/SignUp"
import "./screens/EditProfile"
import "./screens/upload"
import "./screens/Message"
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
                    this.shadowRoot.innerHTML = ``
                    const MyEdit = this.ownerDocument.createElement("my-edit");
                    this.shadowRoot.appendChild(MyEdit)
                break;

                case screens.MESSAGE:
                    this.shadowRoot.innerHTML = '';
                    const message = this.ownerDocument.createElement("message-container")
                    this.shadowRoot?.appendChild(message)
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

                case screens.LANDING:
                    this.shadowRoot.innerHTML = ``
                    const landing = this.ownerDocument.createElement("app-landing");
                    this.shadowRoot.appendChild(landing);
                break;


                case screens.SING_UP:
                    this.shadowRoot.innerHTML = ``
                    const signup = this.ownerDocument.createElement("app-signup");
                    this.shadowRoot.appendChild(signup);
                break;

                case screens.LOG_IN:
                    this.shadowRoot.innerHTML = ``
                    const logins = this.ownerDocument.createElement("app-login");
                    this.shadowRoot.appendChild(logins);
                break;

                case screens.SIGN_IN:
                    this.shadowRoot.innerHTML = ``
                    const sigIn = this.ownerDocument.createElement("app-signin");
                    this.shadowRoot.appendChild(sigIn);
                break;

                default:
                    break;
            }
        }

    }
}

customElements.define("app-container", AppContainer)
export default AppContainer;