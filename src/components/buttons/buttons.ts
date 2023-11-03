import data from "../../service/data";

export enum AttributeButtons {
    "delete_button" = "delete_button",
    "favorite_button" = "favorite_button",
    "like_button" = "like_button"

}

export default class Buttons extends HTMLElement{
    delete_button?: string;
    favorite_button?: string;
    like_button?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButtons, null> ={
            delete_button: null,
            favorite_button: null,
            like_button: null,

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButtons,
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

    render() {
        if(this.shadowRoot) {

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/buttons/buttons.css")
            this.shadowRoot.appendChild(link)

            const delete_button = this.ownerDocument.createElement('button');
            delete_button.innerText = `${this.delete_button}`
            const delete_button_Img = this.ownerDocument.createElement("img");
            delete_button_Img.setAttribute("src", "/dist/img/Delete.png");
            delete_button.appendChild(delete_button_Img)
            delete_button.addEventListener('click', () => {
                //currentIndex = (currentIndex + 1) % data.length;
                //showUserProfile(currentIndex);
            })
            this.shadowRoot.appendChild(delete_button) //Tenias que meter el hijo al padre (osea button) para que se mostrara.


            const favorite_button = this.ownerDocument.createElement('button');
            favorite_button.innerText = `${this.favorite_button}`
            const favorite_button_Img = this.ownerDocument.createElement("img");
            favorite_button_Img.setAttribute("src", "/dist/img/Favorite.png");
            favorite_button.appendChild(favorite_button_Img)

            this.shadowRoot.appendChild(favorite_button)

           const like_button = this.ownerDocument.createElement('button');
           like_button.innerText = `${this.like_button}`
           const like_button_Img = this.ownerDocument.createElement("img");
            like_button_Img.setAttribute("src", "/dist/img/Like.png");
            like_button.appendChild(like_button_Img)

            // like_button.addEventListener("click", async () => {
            //     await this.match(index); // Espera a que se complete la eliminación
            //     console.log("Elemento match"); // Imprime un mensaje después de eliminar
            //   });

           this.shadowRoot.appendChild(like_button)
        }
    }
}

customElements.define('app-buttons',Buttons);



// Obtén una referencia a los elementos HTML
//const infoElement = document.getElementById('info'); // Elemento donde se muestra la información
//const buttonElement = document.getElementById('cambiarButton'); // Botón para cambiar la información

// Define una lista de información
//const datos = [
  //'Información 1',
  //'Información 2',
  //'Información 3',
//];

// Inicializa un índice para rastrear la información actual
//let indiceActual = 0;

// Función para cambiar la información
//function cambiarInformacion() {
  // Incrementa el índice o reinícialo si llega al final de la lista
  //indiceActual = (indiceActual + 1) % datos.length;

  // Actualiza el elemento HTML con la nueva información
  //if (infoElement) {
    //infoElement.textContent = datos[indiceActual];
  //}
//}

// Agrega un evento de clic al botón para llamar a la función de cambio
//if (buttonElement) {
  //buttonElement.addEventListener('click', cambiarInformacion);
//}


//             })
//             this.shadowRoot?.appendChild(delete_button);

//             const favorite_button = this.ownerDocument.createElement('button');
//             favorite_button.innerText = `${this.favorite_button}`

//             const like_button = this.ownerDocument.createElement('button');
//             like_button.innerText = `${this.like_button}`
//     }
// }

// customElements.define('app-buttons',Buttons);


//            })
//           this.shadowRoot?.appendChild(delete_button);


//}
//}
