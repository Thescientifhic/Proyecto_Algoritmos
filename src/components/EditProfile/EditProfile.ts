import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";

export class EditProfile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if (this.shadowRoot){this.shadowRoot.innerHTML = ``;

            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/src/components/EditProfile/EditProfile.css");
            this.shadowRoot?.appendChild(link);

           const sectionContainer = this.ownerDocument.createElement("section");
           this.shadowRoot.appendChild(sectionContainer);

           const inputs1 = this.ownerDocument.createElement("div");
           inputs1.setAttribute("class", "name");
           sectionContainer.appendChild(inputs1);

           const divgeneral = this.ownerDocument.createElement("div");
           divgeneral.setAttribute("class", "general");
           sectionContainer.appendChild(divgeneral);

           const divother = this.ownerDocument.createElement("div");
           divother.setAttribute("class", "text");
           sectionContainer.appendChild(divother);

           const name = this.ownerDocument.createElement("input");
           name.setAttribute("type", "text");
           name.setAttribute("placeholder", "Name");
           inputs1.appendChild(name);

           const Lastname = this.ownerDocument.createElement("input");
           Lastname.setAttribute("type", "text");
           Lastname.setAttribute("placeholder", "User Name");
           inputs1.appendChild(Lastname)

           const Gymgo = this.ownerDocument.createElement("input")
           Gymgo.setAttribute("type", "text");
           Gymgo.setAttribute("placeholder", "What gym do you go to?");
           divgeneral.appendChild(Gymgo)

           const times = this.ownerDocument.createElement("input");
           times.setAttribute("type", "text");
           times.setAttribute("placeholder", "How many times do you train a week?");
           divgeneral.appendChild(times)

           const location = this.ownerDocument.createElement("input");
           location.setAttribute("type", "text");
           location.setAttribute("placeholder", "Location");
           divgeneral.appendChild(location);

           const city = this.ownerDocument.createElement("input");
           city.setAttribute("type", "text");
           city.setAttribute("placeholder", "City");
           divgeneral.appendChild(city)

           const description = this.ownerDocument.createElement("input")
           description.setAttribute("type", "text");
           description.setAttribute("placeholder", "Description");
           divgeneral.appendChild(description)

           const userimg = this.ownerDocument.createElement("img")
           userimg.setAttribute("src", "/dist/img/usuario.png")
           divother.appendChild(userimg)

           const btnsave = this.ownerDocument.createElement("button")
           btnsave.innerText = "Save"
           divother.appendChild(btnsave)
           btnsave.addEventListener("click", () => {
           console.log("click main")
           dispatch(navigate(screens.MAIN))
        })
        }
    }
}

customElements.define("my-edit", EditProfile)