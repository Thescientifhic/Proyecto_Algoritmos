import { navigate } from "../../store/actions";
import { addObserver, dispatch } from "../../store/index";
import { screens } from "../../types/navigation";
import Firebase from "../../utils/firebase";

export enum AttributeSignIn {
    btnSignIn = "btnSignIn",
    btnAccount = "btnAccount"
}

const credentials = { email: "", password: "" };

export default class SignIn extends HTMLElement {
    btnSignIn?: string;
    btnAccount?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeSignIn, null> = {
            btnSignIn: null,
            btnAccount: null,
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeSignIn,
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
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    async handleLoginButton() {
        Firebase.loginUser(credentials);
      }

      async render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/SignIn/Signin.css")
        this.shadowRoot?.appendChild(link);

        const logo_Img = this.ownerDocument.createElement("img");
        logo_Img.setAttribute("src", "/dist/img/image 45.png");
        logo_Img.classList.add('logoI');

        // Textoo
        const h1_Element = this.ownerDocument.createElement('h1');
        h1_Element.innerText = "Sign In";

        // Agregar el formulario de inicio de sesión
        const section = this.ownerDocument.createElement("section");
        section.classList.add('sect');

        const loginForm = this.ownerDocument.createElement("form");
        loginForm.classList.add('form');

        section.appendChild(loginForm);

        // Boton salir
        const goOut = this.ownerDocument.createElement("button");
        goOut.classList.add('go-out');
        goOut.addEventListener("click", () => {
            console.log("click out")
            dispatch(navigate(screens.LANDING))
        })

        const imgOut = this.ownerDocument.createElement("img");
        imgOut.setAttribute("src", "/dist/img/X.png");
        imgOut.classList.add('img-out');
        goOut.appendChild(imgOut);

        // Campo de correo electrónico
        const emailInput = this.ownerDocument.createElement("input");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("placeholder", "E-mail");
        emailInput.addEventListener(
            "change",
            (e: any) => (credentials.email = e.target.value)
          );
        emailInput.classList.add('inpuut');

        // Campo de contraseña
        const passwordInput = this.ownerDocument.createElement("input");
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("placeholder", "Password");
        passwordInput.addEventListener(
            "change",
            (e: any) => (credentials.password = e.target.value)
          );
        passwordInput.classList.add('inpuut');

        // link sign up
        const linkCreate = this.ownerDocument.createElement("button");
        linkCreate.innerText = "Don´t have an account? Create"
        linkCreate.classList.add('linkCreate');
        linkCreate.addEventListener("click", () => {
            console.log("click Login")
            dispatch(navigate(screens.SING_UP))
        })


        // Botón de inicio de sesión
        const loginButton = this.ownerDocument.createElement("button");
        loginButton.classList.add('loginbtn');
        loginButton.innerText = "Log In";
        // loginButton.addEventListener("click", this.handleLoginButton);
        loginButton.addEventListener("click", () => {
            console.log("click Login")
            dispatch(navigate(screens.MAIN))
        })

        // Agregar elementos al formulario
        loginForm.appendChild(goOut);
        loginForm.appendChild(h1_Element);
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

customElements.define('app-signin', SignIn);