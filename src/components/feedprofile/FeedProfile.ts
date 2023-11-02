
export enum feedAttribute {
    "img" = "img"
}


export class Feed extends HTMLElement {
    img?: string;

    static get observedAttributes(){
        const attrs: Record <feedAttribute, null> ={
            img: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: feedAttribute,
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
            link.setAttribute("href", "/src/components/feedprofile/feedprofile.css")
            this.shadowRoot.appendChild(link);

            const sectionContainer = this.ownerDocument.createElement("section")
            this.shadowRoot.appendChild(sectionContainer);

            const profileGeneral = this.ownerDocument.createElement("div")
            profileGeneral.setAttribute("class", "general")
            sectionContainer.appendChild(profileGeneral)

            const divUser = this.ownerDocument.createElement("div")
            divUser.setAttribute("class", "Profile")
            profileGeneral.appendChild(divUser)

            const divtext = this.ownerDocument.createElement("div")
            divtext.setAttribute("class", "text")
            profileGeneral.appendChild(divtext)

            const divFeed = this.ownerDocument.createElement("div")
            divFeed.setAttribute("class", "Feed")
            sectionContainer.appendChild(divFeed)

            const user = this.ownerDocument.createElement("img")
            user.setAttribute("src", "/dist/algo/Perfil.png")
            user.setAttribute("class", "img-profile")
            divUser.appendChild(user)

            const nameUser = this.ownerDocument.createElement("h1")
            nameUser.innerText = "Phobicc.tatan"
            divtext.appendChild(nameUser)

            const Name = this.ownerDocument.createElement("p")
            Name.innerText = "Juan Sebastian Rodriguez"
            divtext.appendChild(Name)

            const btnUser = this.ownerDocument.createElement("button")
            btnUser.innerHTML = "Edit Profile"
            divtext.appendChild(btnUser)

            const photo1 = this.ownerDocument.createElement("img")
            photo1.setAttribute("src", "/dist/algo/perfil1.png")
            divFeed.appendChild(photo1)

            const photo2 = this.ownerDocument.createElement("img")
            photo2.setAttribute("src", "/dist/algo/perfil2.png")
            divFeed.appendChild(photo2)

            const photo3 = this.ownerDocument.createElement("img")
            photo3.setAttribute("src", "/dist/algo/perfil3.png")
            divFeed.appendChild(photo3)
        }
    }
}

customElements.define("my-feed",Feed);

