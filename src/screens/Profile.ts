import "../components/export"
import "../components/nav/nav"
import { feedAttribute } from "../components/feedprofile/FeedProfile";
import firebase, { getDataProfile } from "../utils/firebase"
import {getDataPost,} from "../utils/firebase";

export class Profile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }


async render() {

    try {

        const dataProfile = await getDataProfile();
        console.log(dataProfile);

        if (this.shadowRoot) {
            console.log("My Profile")
          this.shadowRoot.innerHTML = '';

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/Profile.css")
            this.shadowRoot.appendChild(link);

            const divcontainer = this.ownerDocument.createElement("div")
            divcontainer.setAttribute("class", "container")
            this.shadowRoot?.appendChild(divcontainer)

            const myNav = this.ownerDocument.createElement("my-nav");
            divcontainer.appendChild(myNav)


            dataProfile.forEach((profile) => {
                const Myfeed = this.ownerDocument.createElement("my-feed");
                Myfeed.setAttribute(feedAttribute.profile, profile.profile);
                Myfeed.setAttribute(feedAttribute.name, profile.name);
                Myfeed.setAttribute(feedAttribute.user_name, profile.user_name);
                Myfeed.setAttribute(feedAttribute.info_gym, profile.info_gym);
                Myfeed.setAttribute(feedAttribute.info_times, profile.info_times);
                Myfeed.setAttribute(feedAttribute.description, profile.description);
                Myfeed.setAttribute(feedAttribute.img, profile.img);
                divcontainer.appendChild(Myfeed)
            })

        }
    }


     catch (error) {
        console.error("Error al cargar datos de Firebase:", error);
        }
    }
}


customElements.define("my-profile", Profile)
