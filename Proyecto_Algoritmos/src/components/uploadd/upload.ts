


export enum AttributeUpload {
     "img" = "img",
    "btn" = "btn",


}

export default class Upload extends HTMLElement{
     img?: string;
    btn?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeUpload, null> ={
             img: null,
            btn: null,

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeUpload,
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
        link.setAttribute("href", "/src/components/uploadd/upload.css")
        this.shadowRoot?.appendChild(link);

        const section = this.ownerDocument.createElement('section');

        const h1_Element = this.ownerDocument.createElement('h1');
        h1_Element.innerText = "Upload a new post to your feed";
        section.appendChild(h1_Element);

        // Falta el de salir y hacer lo que pidio el profe


        const line = this.ownerDocument.createElement('hr');
        section.appendChild(line);

        const img = this.ownerDocument.createElement('img');
        img.setAttribute("src", "/dist/img/upload.png");
        img.classList.add('img-out');
        section.appendChild(img);

        //boton seleccionar imagen
        const upload_button = this.ownerDocument.createElement('button');
        upload_button.innerText = `Choose a photo from your computer`;
        upload_button.classList.add('green-button');
        section.appendChild(upload_button);

        this.shadowRoot?.appendChild(section);

    }
}

customElements.define('app-upload',Upload);