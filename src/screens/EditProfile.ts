import "../components/export"
import "../components/nav/nav"
import { addObserver } from "../store/index";

export class Editcontainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }
<<<<<<< HEAD
    
    
    render() {
        if (this.shadowRoot) {
           
          this.shadowRoot.innerHTML = ``;
=======


    render() {
        if (this.shadowRoot) {
            console.log("My Edit")
          this.shadowRoot.innerHTML = '';
>>>>>>> origin/sebastian

            // const link = this.ownerDocument.createElement("link")
            // link.setAttribute("rel", "stylesheet")
            // link.setAttribute("href", "/src/screens/Profile.css")
            // this.shadowRoot.appendChild(link);

            const divcontainer = this.ownerDocument.createElement("div")
            divcontainer.setAttribute("class", "container")
            this.shadowRoot?.appendChild(divcontainer)
<<<<<<< HEAD
    
            const myNav = this.ownerDocument.createElement("my-nav");
            this.shadowRoot?.appendChild(myNav);
    
            const MyEdit = this.ownerDocument.createElement("my-edit");
            divcontainer.appendChild(MyEdit)
        }
    } 
}
    
=======

            const myNav = this.ownerDocument.createElement("my-nav");
            this.shadowRoot.appendChild(myNav);

            const MyEdit = this.ownerDocument.createElement("my-edit");
            divcontainer.appendChild(MyEdit)
        }
    }
}

>>>>>>> origin/sebastian
customElements.define("my-editcontainer", Editcontainer)