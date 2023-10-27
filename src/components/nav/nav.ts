import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";
import "../navButton/navButton";

//export enum Attribute {
    //"logo" = "logo",
    //"user" = "user",

//}

class Nav extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/Nav/Nav.css")
            this.shadowRoot.appendChild(link);

            const nav = this.ownerDocument.createElement("nav")
            this.shadowRoot.appendChild(nav);

            const mainLogo = this.ownerDocument.createElement("img")
            mainLogo.setAttribute("src", "/dist/img/image 45.png")
            mainLogo.setAttribute("class", "mainLogo")
            nav.appendChild(mainLogo);


            const iconPrueba = this.ownerDocument.createElement("nav-button")
            iconPrueba.setAttribute("icon", "/dist/img/home.png")
            nav.appendChild(iconPrueba);

            const iconPrueba2 = this.ownerDocument.createElement("nav-button")
            iconPrueba2.setAttribute("icon", "/dist/img/buscar.png")
            nav.appendChild(iconPrueba2);

            const iconPrueba3 = this.ownerDocument.createElement("nav-button")
            iconPrueba3.setAttribute("icon", "/dist/img/enviar.png")
            nav.appendChild(iconPrueba3);

            const iconPrueba4 = this.ownerDocument.createElement("nav-button")
            iconPrueba4.setAttribute("icon", "/dist/img/ajustes.png")
            nav.appendChild(iconPrueba4);

            const iconPrueba5 = this.ownerDocument.createElement("nav-button")
            iconPrueba5.setAttribute("icon", "/dist/img/campana.png")
            nav.appendChild(iconPrueba5);

            const iconPrueba6 = this.ownerDocument.createElement("nav-button")
            iconPrueba6.setAttribute("icon", "/dist/img/agregar.png")
            nav.appendChild(iconPrueba6);

            const user = this.ownerDocument.createElement("img")
            user.setAttribute("src", "/dist/img/usuario.png")
            user.setAttribute("class", "user")
            nav.appendChild(user);
            user.addEventListener("click", () => {
                console.log("click user")
                dispatch(navigate(screens.PROFILE))
            })



        }
    }
}

customElements.define("my-nav",Nav);
export default Nav;