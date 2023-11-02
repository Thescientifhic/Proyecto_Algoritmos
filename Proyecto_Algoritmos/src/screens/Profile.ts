import "../components/export"
import "../components/nav/nav"
import { addObserver } from "../store/index";

export class Profile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }
    
    
    render() {
        if (this.shadowRoot) {
            console.log("My Profile")
          this.shadowRoot.innerHTML = '';

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/Profile.css")
            this.shadowRoot.appendChild(link);

            const divcontainer = this.ownerDocument.createElement("div")
            divcontainer.setAttribute("class", "container")
            this.shadowRoot?.appendChild(divcontainer)
    
            const myNav = this.ownerDocument.createElement("my-nav");
            divcontainer.appendChild(myNav)
    
            const Myfeed = this.ownerDocument.createElement("my-feed");
            divcontainer.appendChild(Myfeed)
        }
    } 
}
    
customElements.define("my-profile", Profile)
