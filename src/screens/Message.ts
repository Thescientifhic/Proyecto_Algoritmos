import "../components/export";
import { MessageAttribute } from "../components/Message/Message";
import { getMatchData } from "../utils/firebase"


class MessageContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const messagePost = await getMatchData();
      console.log(messagePost);
    this.render();
  }

  async render() {
    try {

      const messagePost = await getMatchData();
      console.log(messagePost);

      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = '';

        const myNav = this.ownerDocument.createElement("my-nav");
        this.shadowRoot.appendChild(myNav);

        messagePost.forEach((user) => {

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/message.css")
            this.shadowRoot?.appendChild(link);

            const Message = this.ownerDocument.createElement("app-message");
            Message.setAttribute(MessageAttribute.img, user.img);
            Message.setAttribute(MessageAttribute.name, user.name);
            this.shadowRoot?.appendChild(Message);

            });
          }

      }
     catch (error) {
      console.error("Error al cargar datos de Firebase:", error);
    }
  }
}

customElements.define("message-container", MessageContainer);
export default MessageContainer;