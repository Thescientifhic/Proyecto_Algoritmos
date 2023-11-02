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

           const sectionContainer = this.ownerDocument.createElement("section")
           this.shadowRoot.appendChild(sectionContainer);

           const inputs1 = this.ownerDocument.createElement("div")
           inputs1.setAttribute("class", "name")
           sectionContainer.appendChild(inputs1)

           const divgeneral = this.ownerDocument.createElement("div")
           divgeneral.setAttribute("class", "general")
           sectionContainer.appendChild(divgeneral)

           const divother = this.ownerDocument.createElement("div")
           divother.setAttribute("class", "text")
           sectionContainer.appendChild(divother)

           const name = this.ownerDocument.createElement("input")
           name.innerText = "Name"
           inputs1.appendChild(name)

           const Lastname = this.ownerDocument.createElement("input")
           Lastname.innerText = "User Name"
           inputs1.appendChild(Lastname)

           const Gymgo = this.ownerDocument.createElement("input")
           Gymgo.innerText = "What gym do you go to?"
           divgeneral.appendChild(Gymgo)

           const times = this.ownerDocument.createElement("input")
           times.innerText = "How many times do you train a week?"
           divgeneral.appendChild(times)

           const location = this.ownerDocument.createElement("input")
           location.innerText = "Location"
           divgeneral.appendChild(location)

           const city = this.ownerDocument.createElement("input")
           city.innerText = "City"
           divgeneral.appendChild(city)

           const description = this.ownerDocument.createElement("input")
           description.innerText = "Description"
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