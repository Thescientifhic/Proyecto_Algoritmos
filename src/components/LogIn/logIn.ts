export enum AttributeLogIn {
    btnSignIn = "btnSignIn",
    btnAccount = "btnAccount"
}

export default class LogIn extends HTMLElement {
    btnSignIn?: string;
    btnAccount?: string;

    static get observedAttributes() {
        const attrs: Record<AttributeLogIn, null> = {
            btnSignIn: null,
            btnAccount: null,
        };
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeLogIn,
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

        // Agregar el formulario de inicio de sesión
        const loginForm = this.ownerDocument.createElement("form");

        // Boton salir
        const goOut = this.ownerDocument.createElement("button");
        const imgOut = this.ownerDocument.createElement("img");
        imgOut.setAttribute("src", "/dist/img/Delete.png");

        // Campo de correo electrónico
        const emailInput = this.ownerDocument.createElement("input");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("placeholder", "E-mail");

        // Campo de contraseña
        const passwordInput = this.ownerDocument.createElement("input");
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("placeholder", "Password");

        // Botón de recordar
        const rememberCheckbox = this.ownerDocument.createElement("input");
        rememberCheckbox.setAttribute("type", "checkbox");
        const rememberLabel = this.ownerDocument.createElement("label");
        rememberLabel.innerText = "Remember me";

        // const forgotPassword = this.ownerDocument.createElement("")
        // Que pongo en un olvido su clave? es un <a></a> o un <button></button>

        // Botón de inicio de sesión
        const loginButton = this.ownerDocument.createElement("button");
        loginButton.innerText = "Log In";

        // const haveAccount = this.ownerDocument.createElement("")
        // Que pongo en un link crear clave? es un <a></a> o un <button></button>

        // Agregar elementos al formulario
        loginForm.appendChild(emailInput);
        loginForm.appendChild(passwordInput);
        loginForm.appendChild(rememberCheckbox);
        loginForm.appendChild(rememberLabel);
        loginForm.appendChild(loginButton);

        this.shadowRoot?.appendChild(loginForm);

        // Otros elementos, como tu logotipo y botones, pueden agregarse aquí
    }
}

customElements.define('app-login', LogIn);
