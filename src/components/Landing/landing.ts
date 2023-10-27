
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

        // const link = this.ownerDocument.createElement("link")
        //     link.setAttribute("rel", "stylesheet")
        //     link.setAttribute("href", "/src/components/Landing/landing.css")
        //     this.shadowRoot.appendChild(link);

        const logo_Img = this.ownerDocument.createElement("img");
        logo_Img.setAttribute("src", "/dist/img/image 45.png");

        const sign_button = this.ownerDocument.createElement('button');
        sign_button.innerText = `${this.btnSignIn} ||  Log in`;

        const h1_Element = this.ownerDocument.createElement('h1');
        h1_Element.innerText = "Discover your gym partner";

        const account_button = this.ownerDocument.createElement('button');
        account_button.innerText = `${this.btnSignIn} || Create an account`;


        this.shadowRoot?.appendChild(logo_Img);
        this.shadowRoot?.appendChild(sign_button);
        this.shadowRoot?.appendChild(h1_Element);
        this.shadowRoot?.appendChild(account_button);


    //     <link rel="stylesheet" href="/src/components/carousel/carousel.css">


    //     <section>
    //     <nav>
    //         <img class="logo" src="/dist/img/image 45.png">
    //         <button>${this.btnSignIn}</button>
    //     </nav>
    //     <div>
    //         <h1>Discover your gym partner</h1>
    //         <button>${this.btnAccount}</button>
    //     </div>
    //     </section>
    // `
    }
}

customElements.define('app-landing',Landing);