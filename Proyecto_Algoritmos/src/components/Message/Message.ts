export enum AttributeMessage {
    "iud" = "iud",
    "name" = "name",
    "image" ="image"

}

export default class Message
 extends HTMLElement{
    iud?: string;
    name?: string;
    image?: string;


    static get observedAttributes(){
        const attrs: Record <AttributeMessage, null> ={
            iud:null,
            name: null,
            image: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeMessage,
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
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/components/infoProfile/infoprofile.css">
            <section>
            <p>${this.iud}</p>
            <h1>${this.name}</h1>
            <img src = "${this.image}">
            </section>`
    }
}

customElements.define('app-message',Message);