enum NavButtonPropreties {
    "icon" = "icon"
}

class NavButton extends HTMLElement {
    icon?: string;

    static get observedAttributes(){
        const attrs: Record<NavButtonPropreties,null> = {
            icon: null,
        }
        return Object.keys(attrs); 
    }
    
    attributeChangedCallback(propName:NavButtonPropreties, oldValue: string | undefined, newValue: string | undefined ){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        //this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/navButton/navButton.css")
            this.shadowRoot.appendChild(link)

            const iconButton = this.ownerDocument.createElement("button")
            const icon = this.ownerDocument.createElement("img")
            icon.setAttribute("src", `${this.icon}`)

            iconButton.appendChild(icon)

            this.shadowRoot.appendChild(iconButton)

        }

    }

}

customElements.define("nav-button", NavButton);
export default NavButton;