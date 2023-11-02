import data from "../service/data";
import { AttributeFunctioncard } from "../components/functionCard/function";
import { AttributeCarousel } from "../components/carousel/carousel";
import "../components/export";
import "../components/nav/nav";
import { addObserver } from "../store/index";

class MainContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  connectedCallback() {
    this.render();
  }

  deleteItem(index: number) {
    // Elimina el elemento en el índice especificado de la matriz data
    data.splice(index, 1);
    // Vuelve a renderizar la vista para reflejar los cambios
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

        data.forEach((user, index) => {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/screens/main.css")
        this.shadowRoot?.appendChild(link);

        if (index === 0) { // Verifica si el índice es igual a 0
          const Carousel = this.ownerDocument.createElement("app-carousel");
          Carousel.setAttribute(AttributeCarousel.btnleft, " ");
          Carousel.setAttribute(AttributeCarousel.img, user.img);
          //  Carousel.setAttribute(AttributeCarousel.img2, user.img2);
          Carousel.setAttribute(AttributeCarousel.btnright, " ");

          if (this.shadowRoot) {
            this.shadowRoot.appendChild(Carousel);
          }

          const functionCard = this.ownerDocument.createElement("app-functioncard");
          // Establece los atributos para el componente Functioncard
          functionCard.setAttribute(AttributeFunctioncard.name, user.name);
          functionCard.setAttribute(AttributeFunctioncard.btn_info, " ");
          functionCard.setAttribute(AttributeFunctioncard.delete_button, " ");
          functionCard.setAttribute(AttributeFunctioncard.favorite_button, " ");
          functionCard.setAttribute(AttributeFunctioncard.like_button, " ");

          // Agrega un evento de clic al botón de eliminación
          functionCard.addEventListener("click", () => {
            this.deleteItem(index);
          });

          if (this.shadowRoot) {
            this.shadowRoot.appendChild(functionCard);
          }
        }
      });
    }
  }
}

customElements.define("main-container", MainContainer);
export default MainContainer;
