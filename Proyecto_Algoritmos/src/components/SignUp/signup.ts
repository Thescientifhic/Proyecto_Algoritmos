import { navigate } from "../../store/actions";
import { addObserver, dispatch } from "../../store/index";
import { screens } from "../../types/navigation";

export enum AttributeSignUp {
    btnSignIn = "btnSignIn",
    btnAccount = "btnAccount"
}

export default class SignUp extends HTMLElement {
    btnSignIn?: string;
    btnAccount?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeSignUp, null> = {
            btnSignIn: null,
            btnAccount: null,
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeSignUp,
        _: unknown,
        newValue: string
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/SignUp/signup.css")
        this.shadowRoot?.appendChild(link);

        const logo_Img = this.ownerDocument.createElement("img");
        logo_Img.setAttribute("src", "/dist/img/image 45.png");
        logo_Img.classList.add('logoI');

        // Textoo
        const h1_Element = this.ownerDocument.createElement('h1');
        h1_Element.innerText = "Sign Up";

        // Agregar el formulario de inicio de sesión
        const section = this.ownerDocument.createElement("section");
        section.classList.add('sect');

        const loginForm = this.ownerDocument.createElement("form");
        loginForm.classList.add('form');

        section.appendChild(loginForm);

        // Boton salir
        const goOut = this.ownerDocument.createElement("button");
        goOut.classList.add('go-out');
        const imgOut = this.ownerDocument.createElement("img");
        imgOut.setAttribute("src", "/dist/img/X.png");
        imgOut.classList.add('img-out');
        goOut.appendChild(imgOut);
        goOut.addEventListener("click", () => {
            console.log("click edit")
            dispatch(navigate(screens.LANDING))
        })
        


        // Nombre
        const nameInput = this.ownerDocument.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "Name");
        nameInput.classList.add('inpuut');

        // Campo de correo electrónico
        const emailInput = this.ownerDocument.createElement("input");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("placeholder", "E-mail");
        emailInput.classList.add('inpuut');

        // Campo de contraseña
        const passwordInput = this.ownerDocument.createElement("input");
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("placeholder", "Password");
        passwordInput.classList.add('inpuut');

        // Botón de inicio de sesión
        const loginButton = this.ownerDocument.createElement("button");
        loginButton.classList.add('loginbtn');
        loginButton.innerText = "Create Account";
        loginButton.addEventListener("click", () => {
            console.log("click edit")
            dispatch(navigate(screens.EDIT_PROFILE))
        })

        const linkCreate = this.ownerDocument.createElement("a");
        linkCreate.innerText = "Already have an account? Sign in"

        // Agregar elementos al formulario
        loginForm.appendChild(goOut);
        loginForm.appendChild(h1_Element);
        loginForm.appendChild(nameInput);
        loginForm.appendChild(emailInput);
        loginForm.appendChild(passwordInput);
        // loginForm.appendChild(rememberCheckbox);
        // loginForm.appendChild(rememberLabel);
        loginForm.appendChild(loginButton);
        loginForm.appendChild(linkCreate);

        this.shadowRoot?.appendChild(logo_Img);
        this.shadowRoot?.appendChild(section);

    const body = document.body;

    // Establece la URL de la imagen de fondo
    const imageUrl = '/dist/img/Landing.png';

    // Aplica el estilo de fondo al elemento
    body.style.backgroundImage = `url(${imageUrl})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';


    }
}

customElements.define('app-signup', SignUp);
