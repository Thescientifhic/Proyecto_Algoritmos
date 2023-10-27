import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";


export enum AttributeLanding {
    // "img" = "img",
    // // "img2" ="img2",
    "btnSignIn" = "btnSignIn",
    "btnAccount" = "btnAccount"

}

export default class Landing extends HTMLElement{
    // img?: string;
    //img2?: string;
    btnSignIn?: string;
    btnAccount?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeLanding, null> ={
            // img: null,
        //    img2: null,
            btnSignIn: null,
            btnAccount: null,

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeLanding,
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
        link.setAttribute("href", "/src/components/Landing/landing.css")
        this.shadowRoot?.appendChild(link);

        const nav = this.ownerDocument.createElement("nav");

        const logo_Img = this.ownerDocument.createElement("img");
        logo_Img.setAttribute("src", "/dist/img/image 45.png");

        const sign_button = this.ownerDocument.createElement('button');
        sign_button.innerText = ` Log in`;
        sign_button.classList.add('white-button');
        // sign_button.addEventListener("click", () => {
        //     console.log("click user")
        //     dispatch(navigate(screens.MAIN))})

        nav.appendChild(logo_Img);
        nav.appendChild(sign_button);

        const h1_Element = this.ownerDocument.createElement('h1');
        h1_Element.innerText = "Discover your gym partner";

        const account_button = this.ownerDocument.createElement('button');
        account_button.innerText = `Create an account`;
        account_button.classList.add('green-button');


        this.shadowRoot?.appendChild(nav);
        this.shadowRoot?.appendChild(h1_Element);
        this.shadowRoot?.appendChild(account_button);

        const body = document.body;

        // Establece la URL de la imagen de fondo
        const imageUrl = '/dist/img/Landing.png';

        // Aplica el estilo de fondo al elemento
        body.style.backgroundImage = `url(${imageUrl})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';

    }
}

customElements.define('app-landing',Landing);