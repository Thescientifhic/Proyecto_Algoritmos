import "../components/export"
import "../components/nav/nav"

export default class Profile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }
    
    
    render() {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = '';

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/profile.css")
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
