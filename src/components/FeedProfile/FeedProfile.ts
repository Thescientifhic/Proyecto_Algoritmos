export default class Feed extends HTMLElement {

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
            link.setAttribute("href", "/src/components/Nav/Nav.css")
            this.shadowRoot.appendChild(link);

            const section = this.ownerDocument.createElement("section")
            this.shadowRoot.appendChild(section);

            const user = this.ownerDocument.createElement("img")
            user.setAttribute("src", "dist/algo/Group 126.png")
            user.setAttribute("class", "user")

            const btn = this.ownerDocument.createElement("button")
            btn.setAttribute("Edit Profile","")

            const photo1 = this.ownerDocument.createElement("img")
            photo1.setAttribute("src", "dist/algo/Rectangle 28.png")

            const photo2 = this.ownerDocument.createElement("img")
            photo2.setAttribute("src", "dist/algo/Rectangle 29.png")

            const photo3 = this.ownerDocument.createElement("img")
            photo3.setAttribute("src", "dist/algo/Rectangle 30.png")
        }
    }
}

customElements.define("my-feed",Feed);
