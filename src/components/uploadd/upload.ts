import firebase from "../../utils/firebase";

export enum AttributeUpload {
     "img" = "img",
    "btn" = "btn",


}

const formPost  = {
    img: "",
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

    changeUrl(e: any){
        formPost.img = e.target.value;
    }

    submitForm(){
        firebase.addPost(formPost);
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

        const loginForm = this.ownerDocument.createElement("form");
        loginForm.classList.add('form');
        section.appendChild(loginForm);

        // Link imagen
        const img_link = this.ownerDocument.createElement("input");
        img_link.setAttribute("type", "text");
        img_link.setAttribute("placeholder", "Url image");
        img_link.addEventListener("change", this.changeUrl);
        img_link.classList.add('inpuut');
        loginForm.appendChild(img_link);


        //boton seleccionar imagen
        const upload_button = this.ownerDocument.createElement('button');
        upload_button.innerText = `upload your picture`;
        upload_button.addEventListener("click", this.submitForm);
        upload_button.classList.add('green-button');
        section.appendChild(upload_button);
        this.shadowRoot?.appendChild(section);

    }
}

customElements.define('app-upload',Upload);