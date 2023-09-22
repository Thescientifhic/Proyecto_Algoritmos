export enum AttributeInfoprofile {
    "name" = "name",
    "btn_info" ="btn_info"

}

export default class Infoprofile extends HTMLElement{
    name?: string;
    btn_info?: string;


    static get observedAttributes(){
        const attrs: Record <AttributeInfoprofile, null> ={
            name: null,
            btn_info: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeInfoprofile,
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
            <h1>${this.name}</h1>
            <button><img src="/dist/img/Href.png">${this.btn_info}</button>
            </section>`
    }
}

customElements.define('app-infoprofile',Infoprofile);