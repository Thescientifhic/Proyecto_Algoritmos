import "../components/export"
import "../components/nav/nav"
<<<<<<< HEAD
import firebase, { getDataProfile } from "../utils/firebase"
import {getDataPost,} from "../utils/firebase";
import { getDataImgProfile } from "../utils/firebase";
import { feedAttribute } from "../components/FeedProfile/FeedProfile";
=======
import { feedAttribute } from "../components/feedprofile/FeedProfile";
import firebase, { getDataProfile } from "../utils/firebase"
import {getDataPost,} from "../utils/firebase";
import { getDataImgProfile } from "../utils/firebase";
>>>>>>> origin/sebastian

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

        const dataImgProfile = await getDataImgProfile();
        console.log(dataImgProfile);

        if (this.shadowRoot) {
            console.log("My Profile")
          this.shadowRoot.innerHTML = '';

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/screens/Profile.css")
            this.shadowRoot.appendChild(link);

<<<<<<< HEAD
            const divContainerAll = this.ownerDocument.createElement("div")
            divContainerAll.setAttribute("class", "containerAll")
            this.shadowRoot?.appendChild(divContainerAll)

            const divcontainer = this.ownerDocument.createElement("div")
            divcontainer.setAttribute("class", "container")
            divContainerAll.appendChild(divcontainer)

            const divcontainer2 = this.ownerDocument.createElement("div")
            divcontainer2.setAttribute("class", "container2")
            divContainerAll.appendChild(divcontainer2)

            const myNav = this.ownerDocument.createElement("my-nav");
            this.shadowRoot?.appendChild(myNav)
=======
            const divcontainer = this.ownerDocument.createElement("div")
            divcontainer.setAttribute("class", "container")
            this.shadowRoot?.appendChild(divcontainer)

            const divcontainer2 = this.ownerDocument.createElement("div")
            divcontainer2.setAttribute("class", "container2")
            this.shadowRoot?.appendChild(divcontainer2)

            const myNav = this.ownerDocument.createElement("my-nav");
            divcontainer.appendChild(myNav)

>>>>>>> origin/sebastian

            dataProfile.forEach((profile) => {
                const Myfeed = this.ownerDocument.createElement("my-feed");
                Myfeed.setAttribute(feedAttribute.profile, profile.profile);
                Myfeed.setAttribute(feedAttribute.name, profile.name);
                Myfeed.setAttribute(feedAttribute.user_name, profile.user_name);
                Myfeed.setAttribute(feedAttribute.info_gym, profile.info_gym);
                Myfeed.setAttribute(feedAttribute.info_times, profile.info_times);
                Myfeed.setAttribute(feedAttribute.description, profile.description);
                divcontainer.appendChild(Myfeed)
            })

            dataImgProfile.forEach((img) => {
                const postImage = this.ownerDocument.createElement("img");
                postImage.classList.add("upload-image")
                postImage.src = img.img;
                divcontainer2.appendChild(postImage);
                })

        }
    }


     catch (error) {
        console.error("Error al cargar datos de Firebase:", error);
        }
    }
}


customElements.define("my-profile", Profile)
