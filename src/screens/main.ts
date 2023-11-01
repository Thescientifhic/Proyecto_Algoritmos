// import data from "../service/data";
import { AttributeFunctioncard } from "../components/functionCard/function";
import { AttributeCarousel } from "../components/carousel/carousel";
import firebase from "../utils/firebase"
import {getDataPost,} from "../utils/firebase";

import "../components/export";
import "../components/nav/nav";

class MainContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async deleteItem(index: number) {
    try {
      const dataPost = await getDataPost(); // Obtiene la lista actualizada de datos desde Firebase

      if (index >= 0 && index < dataPost.length) {
        dataPost.splice(index, 1); // Elimina el elemento en el índice especificado

        // Vuelve a renderizar la vista para reflejar los cambios
        this.render();
      }

    } catch (error) {
      console.error("Error al eliminar el elemento:", error);
    }
  }

  async render() {

    try {

      const dataPost = await getDataPost();
      console.log(dataPost);

      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = '';

          const myNav = this.ownerDocument.createElement("my-nav");
          this.shadowRoot.appendChild(myNav);

          dataPost.forEach((user, index) => {
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
            // functionCard.addEventListener("click", () => {
            //   this.deleteItem(index);
            // });

            functionCard.addEventListener("click", () => {
              this.deleteItem(index);
              console.log(this.deleteItem);

            });

            if (this.shadowRoot) {
              this.shadowRoot.appendChild(functionCard);
            }
          }
        });
      }
    }


   catch (error) {
      console.error("Error al cargar datos de Firebase:", error);

  }

  }
}

customElements.define("main-container", MainContainer);
export default MainContainer;
