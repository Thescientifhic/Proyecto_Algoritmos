
export enum feedAttribute {
    "profile" = "profile",
    "name" = "name",
    "user_name" = "user_name",
    "info_times" = "info_times",
    "info_gym" = "info_gym",
    "description" = "description",
    "img" ="img",
    "img2" ="img2",
    "img3" ="img3",
    "img4" ="img4",
    "img5" ="img5",
    "img6" ="img6",
}


export class Feed extends HTMLElement {
    img?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
    img6?: string;
    profile?: string;
    name?: string;
    user_name?: string;
    info_times?: string;
    info_gym?: string;
    description?: string;

    static get observedAttributes(){
        const attrs: Record <feedAttribute, null> ={
            img: null,
            img2: null,
            img3: null,
            img4: null,
            img5: null,
            img6: null,
            profile: null,
            name: null,
            user_name: null,
            info_gym: null,
            info_times: null,
            description:null,

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
            user.setAttribute("src", `${this.profile}`)
            user.setAttribute("class", "img-profile")
            divUser.appendChild(user)

            const nameUser = this.ownerDocument.createElement("h1")
            nameUser.innerText = `${this.user_name}`
            divtext.appendChild(nameUser)

            const Name = this.ownerDocument.createElement("p")
            Name.innerText = `${this.name}`
            divtext.appendChild(Name)

            const btnUser = this.ownerDocument.createElement("button")
            btnUser.innerHTML = "Edit Profile"
            divtext.appendChild(btnUser)

            const info = this.ownerDocument.createElement("p")
            info.innerText = `${this.info_gym} / ${this.info_times} / ${this.description}`
            divtext.appendChild(info)


            const photo1 = this.ownerDocument.createElement("img")
            photo1.setAttribute("src", `${this.img}`)
            divFeed.appendChild(photo1)

            const photo2 = this.ownerDocument.createElement("img")
            photo2.setAttribute("src", `${this.img2}`)
            divFeed.appendChild(photo2)

            const photo3 = this.ownerDocument.createElement("img")
            photo3.setAttribute("src", `${this.img3}`)
            divFeed.appendChild(photo3)

            const photo4 = this.ownerDocument.createElement("img")
            photo4.setAttribute("src", `${this.img4}`)
            divFeed.appendChild(photo4)

            const photo5 = this.ownerDocument.createElement("img")
            photo5.setAttribute("src", `${this.img5}`)
            divFeed.appendChild(photo5)

            const photo6 = this.ownerDocument.createElement("img")
            photo6.setAttribute("src", `${this.img6}`)
            divFeed.appendChild(photo6)
        }
    }
}

customElements.define("my-feed",Feed);

