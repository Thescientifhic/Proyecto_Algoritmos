// import data from "../service/data";
import { AttributeFunctioncard } from "../components/functionCard/function";
import { AttributeCarousel } from "../components/carousel/carousel";
import firebase, { actualizarPost } from "../utils/firebase"
import {getDataPost,} from "../utils/firebase";

import "../components/export";
import "../components/nav/nav";
import { addObserver } from "../store";

export class MainContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  connectedCallback() {
    this.render();
  }

  async deleteItem(index: number) {
    try {
      const dataPost = await getDataPost(); // Obtiene la lista actualizada de datos desde Firebase
      console.log(index)
      if (index >= 0 && index < dataPost.length) {
        // Verifica si la propiedad 'deleted' no existe en el objeto y crea la propiedad como 'false'
        if (!dataPost[index].hasOwnProperty('deleted')) {
          dataPost[index].deleted = false;
        }
        // Marca el elemento como eliminado
        dataPost[index].deleted = true;
        // Vuelve a renderizar la vista para reflejar los cambios
        actualizarPost(dataPost[index].id, true)
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
          if (!user.deleted) {
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/main.css")
            this.shadowRoot?.appendChild(link);

            if (user.deleted === false) { // Verifica si el índice es igual a 0
              const Carousel = this.ownerDocument.createElement("app-carousel");
              Carousel.setAttribute(AttributeCarousel.btnleft, " ");
              Carousel.setAttribute(AttributeCarousel.img, user.img);
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
              functionCard.setAttribute(AttributeFunctioncard.index, `${index}`)

              // Agrega un evento de clic al botón de eliminación
              // functionCard.addEventListener("click", async () => {
              //   await this.deleteItem(index); // Espera a que se complete la eliminación
              //   console.log("Elemento eliminado"); // Imprime un mensaje después de eliminar
              // });

              if (this.shadowRoot) {
                this.shadowRoot.appendChild(functionCard);
              }
            }
          }
        });
      }
    } catch (error) {
      console.error("Error al cargar datos de Firebase:", error);
    }
  }
}

customElements.define("main-container", MainContainer);
export default MainContainer;