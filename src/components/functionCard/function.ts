import { AttributeButtons } from "../buttons/buttons";
import { AttributeInfoprofile } from "../infoProfile/infoprofile";

export enum AttributeFunctioncard {
    "name" = "name",
    "btn_info" ="btn_info",
    "delete_button" = "delete_button",
    "favorite_button" = "favorite_button",
    "like_button" = "like_button",
    "index" = "index"

}

export default class Functioncard extends HTMLElement{
    name?: string = "";
    btn_info?: string = "";
    delete_button?: string = "";
    favorite_button?: string = "";
    like_button?: string = "";
    index: string = ""


    static get observedAttributes(){
        const attrs: Record <AttributeFunctioncard, null> ={
            name: null,
            btn_info: null,
            delete_button: null,
            favorite_button: null,
            like_button: null,
            index: null

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeFunctioncard,
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
        this.shadowRoot.innerHTML = '';

        const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/functionCard/function.css")
            this.shadowRoot?.appendChild(link);

        const container = this.ownerDocument.createElement('section');

        const infoProfile = this.ownerDocument.createElement('app-infoprofile');
        infoProfile.setAttribute(AttributeInfoprofile.name, `${this.name}`);
        infoProfile.setAttribute(AttributeInfoprofile.btn_info, `${this.btn_info}`);

        const buttons = this.ownerDocument.createElement('app-buttons');
        buttons.setAttribute(AttributeButtons.delete_button, `${this.delete_button}`);
        buttons.setAttribute(AttributeButtons.favorite_button, `${this.favorite_button}`);
        buttons.setAttribute(AttributeButtons.like_button, `${this.like_button}`);
        buttons.setAttribute(AttributeButtons.index, `${this.index}`)

        container.appendChild(infoProfile);
        container.appendChild(buttons);

        this.shadowRoot?.appendChild(container)
    }
}

customElements.define('app-functioncard',Functioncard);