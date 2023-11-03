
export enum MessageAttribute {
    "img" = "img",
    "name" = "name",

}


export default class Message extends HTMLElement {
    img?: string;
    name?: string;

    static get observedAttributes(){
        const attrs: Record <MessageAttribute, null> ={
            img: null,
            name: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: MessageAttribute,
        _: unknown,
        newValue: string){

            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            //link.setAttribute("href", "/src/components/Message/Message.css")
            this.shadowRoot.appendChild(link);

            const sectionContainer = this.ownerDocument.createElement("section")
            this.shadowRoot?.appendChild(sectionContainer);

            const profileGeneral = this.ownerDocument.createElement("div")
            profileGeneral.setAttribute("class", "general")
            sectionContainer.appendChild(profileGeneral)

            const user = this.ownerDocument.createElement("img")
            user.setAttribute("src", `${this.img}`)
            user.setAttribute("class", "img-profile")
            profileGeneral.appendChild(user)

            const Name = this.ownerDocument.createElement("h1");
            Name.innerText = `${this.name}`;
            profileGeneral.appendChild(Name);

        }
    }
}

customElements.define('app-message',Message);