import { AttributeFunctioncard } from "../functionCard/function";
export enum AttributeCarousel {
    "img" = "img",
    // "img2" ="img2",
    "btnleft" = "btnleft",
    "btnright" = "btnright"

}

export default class Carousel extends HTMLElement{
    img?: string;
    //img2?: string;
    btnleft?: string;
    btnright?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeCarousel, null> ={
            img: null,
        //    img2: null,
            btnleft: null,
            btnright: null,

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCarousel,
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/carousel/carousel.css">

        <section>
        <button><img src="/dist/img/Left.png">${this.btnleft}</button>
        <div>
            <img class="principalimg" src="${this.img}">
        </div>
        <button><img src="/dist/img/Right.png">${this.btnright}</button>
        </section>
    `
    }
}

customElements.define('app-carousel',Carousel);