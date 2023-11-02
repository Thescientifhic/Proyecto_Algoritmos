(()=>{"use strict";var t,e,n,o;!function(t){t.delete_button="delete_button",t.favorite_button="favorite_button",t.like_button="like_button"}(t||(t={}));class s extends HTMLElement{static get observedAttributes(){return Object.keys({delete_button:null,favorite_button:null,like_button:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/components/buttons/buttons.css"),this.shadowRoot.appendChild(t);const e=this.ownerDocument.createElement("button");e.innerText=`${this.delete_button}`;const n=this.ownerDocument.createElement("img");n.setAttribute("src","/dist/img/Delete.png"),e.appendChild(n),e.addEventListener("click",(()=>{})),this.shadowRoot.appendChild(e);const o=this.ownerDocument.createElement("button");o.innerText=`${this.favorite_button}`;const s=this.ownerDocument.createElement("img");s.setAttribute("src","/dist/img/Favorite.png"),o.appendChild(s),this.shadowRoot.appendChild(o);const i=this.ownerDocument.createElement("button");i.innerText=`${this.like_button}`;const c=this.ownerDocument.createElement("img");c.setAttribute("src","/dist/img/Like.png"),i.appendChild(c),this.shadowRoot.appendChild(i)}}}customElements.define("app-buttons",s),function(t){t.img="img",t.btnleft="btnleft",t.btnright="btnright"}(e||(e={}));class i extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,btnleft:null,btnright:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <link rel="stylesheet" href="/src/components/carousel/carousel.css">\n\n\n        <section>\n        <button><img src="/dist/img/Left.png">${this.btnleft}</button>\n        <div>\n            <img class="principalimg" src="${this.img}">\n        </div>\n        <button><img src="/dist/img/Right.png">${this.btnright}</button>\n        </section>\n    `)}}customElements.define("app-carousel",i),function(t){t.name="name",t.btn_info="btn_info"}(n||(n={}));class c extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,btn_info:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="/src/components/infoProfile/infoprofile.css">\n            <section>\n            <h1>${this.name}</h1>\n            <button><img src="/dist/img/Href.png">${this.btn_info}</button>\n            </section>`)}}customElements.define("app-infoprofile",c),function(t){t.name="name",t.btn_info="btn_info",t.delete_button="delete_button",t.favorite_button="favorite_button",t.like_button="like_button"}(o||(o={}));class a extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,btn_info:null,delete_button:null,favorite_button:null,like_button:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.name="",this.btn_info="",this.delete_button="",this.favorite_button="",this.like_button="",this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,o;this.shadowRoot&&(this.shadowRoot.innerHTML="");const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/components/functionCard/function.css"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);const i=this.ownerDocument.createElement("section"),c=this.ownerDocument.createElement("app-infoprofile");c.setAttribute(n.name,`${this.name}`),c.setAttribute(n.btn_info,`${this.btn_info}`);const a=this.ownerDocument.createElement("app-buttons");a.setAttribute(t.delete_button,`${this.delete_button}`),a.setAttribute(t.favorite_button,`${this.favorite_button}`),a.setAttribute(t.like_button,`${this.like_button}`),i.appendChild(c),i.appendChild(a),null===(o=this.shadowRoot)||void 0===o||o.appendChild(i)}}customElements.define("app-functioncard",a);const r=[{name:"Anita",img:"https://img.freepik.com/free-photo/full-shot-woman-jumping-rope_52683-97004.jpg?w=360&t=st=1695317939~exp=1695318539~hmac=8fc4f4a10a0bcd2c1d156575fbdfe3478c6effa0bd68af1a14f6d925836cfe62",img2:"https://img.freepik.com/free-photo/full-shot-smiley-woman-training-outdoors_23-2149713961.jpg?w=360&t=st=1695317996~exp=1695318596~hmac=1007d490c1398b5f6d7ebcc05c1e66df8090a2af7dd6053df5e9cac42103df56"},{name:"David",img:"https://img.freepik.com/foto-gratis/hombre-saltando-mientras-hace-parkour_52683-108607.jpg?w=360&t=st=1695243524~exp=1695244124~hmac=f6c0468b562d2305adb1d0503b469b7c85ee7b3ae69b92dbc6fa9a7ffc194ad8",img2:"https://img.freepik.com/foto-gratis/hombre-saltando-mientras-hace-parkour_52683-108613.jpg?w=360&t=st=1695243552~exp=1695244152~hmac=d6b5b3f2312a4faf293c2326da952d8cd00ec8ce4a1c1b26da81c0270b05fccc"},{name:"Luca",img:"https://img.freepik.com/foto-gratis/retrato-cuerpo-entero-jugador-baloncesto-pelota_155003-12957.jpg?w=360&t=st=1695243586~exp=1695244186~hmac=66e499fb2d57bec89a4f2df4fe1534add9b8a91abb853d2d1367f87351769632",img2:"https://img.freepik.com/foto-gratis/retrato-cuerpo-entero-jugador-baloncesto-pelota_155003-12955.jpg?w=360&t=st=1695243611~exp=1695244211~hmac=51963481b7f3413c809c9ea02fc08d0d659f5b7ecd7b96b75c12e91d2941ac28"},{name:"Andrea",img:"https://img.freepik.com/foto-gratis/mujer-abdominales-visibles-haciendo-fitness_23-2150228963.jpg?w=360&t=st=1695243471~exp=1695244071~hmac=1f8f5dbcdcf9cb709a139a5cb5bd46440e4455f23fdce98fedc05847e713b5f4",img2:"https://img.freepik.com/foto-gratis/mujer-abdominales-visibles-haciendo-fitness_23-2150228961.jpg?t=st=1695241379~exp=1695241979~hmac=1d21e4048f4832ecfeec485b9e2fabc6c552a8fdeef6ffb8f01cd6f224ca31fb"}],d=t=>({type:"NAVIGATE",payload:t});var l;!function(t){t.STORE="STORE"}(l||(l={}));var h;!function(t){t.LANDING="LANDING",t.LOG_IN="LOG_IN",t.SIGN_IN="SIGN_IN",t.SING_UP="SIGN_UP",t.EDIT_PROFILE="EDIT_PROFILE",t.MAIN="MAIN",t.PROFILE="PROFILE",t.MESSAGE="MESSAGE",t.NEW_POST="NEW_POST"}(h||(h={}));const u={screen:h.EDIT_PROFILE};let m=(({key:t,defaultValue:e})=>{const n=localStorage.getItem(t)||sessionStorage.getItem(t);return n?JSON.parse(n):e})({key:l.STORE,defaultValue:u}),p=[];const b=t=>{const e=((t,e)=>{const{type:n,payload:o}=t;return"NAVIGATE"===n&&(e.screen=o),e})(t,JSON.parse(JSON.stringify(m)));var n;m=e,n=e,(({key:t,value:e,session:n=!1})=>{const o=n?sessionStorage:localStorage,s=JSON.stringify(e);o.setItem(t,s)})({key:l.STORE,value:n}),p.forEach((t=>t.render()))},g=t=>{p=[...p,t]};var w,E,f,C,k,D;!function(t){t.icon="icon"}(w||(w={}));class A extends HTMLElement{static get observedAttributes(){return Object.keys({icon:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/components/navButton/navButton.css"),this.shadowRoot.appendChild(t);const e=this.ownerDocument.createElement("button"),n=this.ownerDocument.createElement("img");n.setAttribute("src",`${this.icon}`),e.appendChild(n),this.shadowRoot.appendChild(e)}}}customElements.define("nav-button",A);class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/components/Nav/Nav.css"),this.shadowRoot.appendChild(t);const e=this.ownerDocument.createElement("nav");this.shadowRoot.appendChild(e);const n=this.ownerDocument.createElement("img");n.setAttribute("src","/dist/img/image 45.png"),n.setAttribute("class","mainLogo"),e.appendChild(n);const o=this.ownerDocument.createElement("nav-button");o.setAttribute("icon","/dist/img/home.png"),e.appendChild(o),o.addEventListener("click",(()=>{console.log("click main"),b(d(h.MAIN))}));const s=this.ownerDocument.createElement("nav-button");s.setAttribute("icon","/dist/img/enviar.png"),e.appendChild(s),s.addEventListener("click",(()=>{console.log("click message"),b(d(h.MESSAGE))}));const i=this.ownerDocument.createElement("nav-button");i.setAttribute("icon","/dist/img/ajustes.png"),e.appendChild(i),i.addEventListener("click",(()=>{console.log("click edit profile"),b(d(h.EDIT_PROFILE))}));const c=this.ownerDocument.createElement("nav-button");c.setAttribute("icon","/dist/img/campana.png"),e.appendChild(c),c.addEventListener("click",(()=>{console.log("click message2"),b(d(h.MESSAGE))}));const a=this.ownerDocument.createElement("nav-button");a.setAttribute("icon","/dist/img/agregar.png"),e.appendChild(a),a.addEventListener("click",(()=>{console.log("click new post"),b(d(h.NEW_POST))}));const r=this.ownerDocument.createElement("img");r.setAttribute("src","/dist/img/usuario.png"),r.setAttribute("class","user"),e.appendChild(r),r.addEventListener("click",(()=>{console.log("click user"),b(d(h.PROFILE))}))}}}customElements.define("my-nav",L);class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}deleteItem(t){r.splice(t,1),this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("my-nav");this.shadowRoot.appendChild(t),r.forEach(((t,n)=>{var s;const i=this.ownerDocument.createElement("link");if(i.setAttribute("rel","stylesheet"),i.setAttribute("href","/src/screens/main.css"),null===(s=this.shadowRoot)||void 0===s||s.appendChild(i),0===n){const s=this.ownerDocument.createElement("app-carousel");s.setAttribute(e.btnleft," "),s.setAttribute(e.img,t.img),s.setAttribute(e.btnright," "),this.shadowRoot&&this.shadowRoot.appendChild(s);const i=this.ownerDocument.createElement("app-functioncard");i.setAttribute(o.name,t.name),i.setAttribute(o.btn_info," "),i.setAttribute(o.delete_button," "),i.setAttribute(o.favorite_button," "),i.setAttribute(o.like_button," "),i.addEventListener("click",(()=>{this.deleteItem(n)})),this.shadowRoot&&this.shadowRoot.appendChild(i)}}))}}}customElements.define("main-container",v),function(t){t.img="img"}(E||(E={}));class R extends HTMLElement{static get observedAttributes(){return Object.keys({img:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){const t=this.ownerDocument.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/src/components/feedprofile/feedprofile.css"),this.shadowRoot.appendChild(t);const e=this.ownerDocument.createElement("section");this.shadowRoot.appendChild(e);const n=this.ownerDocument.createElement("div");n.setAttribute("class","general"),e.appendChild(n);const o=this.ownerDocument.createElement("div");o.setAttribute("class","Profile"),n.appendChild(o);const s=this.ownerDocument.createElement("div");s.setAttribute("class","text"),n.appendChild(s);const i=this.ownerDocument.createElement("div");i.setAttribute("class","Feed"),e.appendChild(i);const c=this.ownerDocument.createElement("img");c.setAttribute("src","/dist/algo/Perfil.png"),c.setAttribute("class","img-profile"),o.appendChild(c);const a=this.ownerDocument.createElement("h1");a.innerText="Phobicc.tatan",s.appendChild(a);const r=this.ownerDocument.createElement("p");r.innerText="Juan Sebastian Rodriguez",s.appendChild(r);const d=this.ownerDocument.createElement("button");d.innerHTML="Edit Profile",s.appendChild(d);const l=this.ownerDocument.createElement("img");l.setAttribute("src","/dist/algo/perfil1.png"),i.appendChild(l);const h=this.ownerDocument.createElement("img");h.setAttribute("src","/dist/algo/perfil2.png"),i.appendChild(h);const u=this.ownerDocument.createElement("img");u.setAttribute("src","/dist/algo/perfil3.png"),i.appendChild(u)}}}customElements.define("my-feed",R),function(t){t.btnSignIn="btnSignIn",t.btnAccount="btnAccount"}(f||(f={}));class T extends HTMLElement{static get observedAttributes(){return Object.keys({btnSignIn:null,btnAccount:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t,e,n,o;this.shadowRoot&&(this.shadowRoot.innerHTML="");const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/components/Landing/landing.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const i=this.ownerDocument.createElement("nav"),c=this.ownerDocument.createElement("img");c.setAttribute("src","/dist/img/image 45.png");const a=this.ownerDocument.createElement("button");a.innerText=" Log in",a.classList.add("white-button"),a.addEventListener("click",(()=>{console.log("click Log"),b(d(h.SIGN_IN))})),i.appendChild(c),i.appendChild(a);const r=this.ownerDocument.createElement("h1");r.innerText="Discover your gym partner";const l=this.ownerDocument.createElement("button");l.innerText="Create an account",l.classList.add("green-button"),l.addEventListener("click",(()=>{console.log("click create"),b(d(h.SING_UP))})),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i),null===(n=this.shadowRoot)||void 0===n||n.appendChild(r),null===(o=this.shadowRoot)||void 0===o||o.appendChild(l);const u=document.body;u.style.backgroundImage="url(/dist/img/Landing.png)",u.style.backgroundSize="cover",u.style.backgroundRepeat="no-repeat"}}customElements.define("app-landing",T),function(t){t.btnSignIn="btnSignIn",t.btnAccount="btnAccount"}(C||(C={}));class y extends HTMLElement{static get observedAttributes(){return Object.keys({btnSignIn:null,btnAccount:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t,e,n;this.shadowRoot&&(this.shadowRoot.innerHTML="");const o=this.ownerDocument.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/src/components/SignIn/Signin.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o);const s=this.ownerDocument.createElement("img");s.setAttribute("src","/dist/img/image 45.png"),s.classList.add("logoI");const i=this.ownerDocument.createElement("h1");i.innerText="Sign In";const c=this.ownerDocument.createElement("section");c.classList.add("sect");const a=this.ownerDocument.createElement("form");a.classList.add("form"),c.appendChild(a);const r=this.ownerDocument.createElement("button");r.classList.add("go-out"),r.addEventListener("click",(()=>{console.log("click out"),b(d(h.LANDING))}));const l=this.ownerDocument.createElement("img");l.setAttribute("src","/dist/img/X.png"),l.classList.add("img-out"),r.appendChild(l);const u=this.ownerDocument.createElement("input");u.setAttribute("type","email"),u.setAttribute("placeholder","E-mail"),u.classList.add("inpuut");const m=this.ownerDocument.createElement("input");m.setAttribute("type","password"),m.setAttribute("placeholder","Password"),m.classList.add("inpuut");const p=this.ownerDocument.createElement("a");p.innerText="Don´t have an account? Create";const g=this.ownerDocument.createElement("button");g.classList.add("loginbtn"),g.innerText="Log In",g.addEventListener("click",(()=>{console.log("click Login"),b(d(h.MAIN))})),a.appendChild(r),a.appendChild(i),a.appendChild(u),a.appendChild(m),a.appendChild(g),a.appendChild(p),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s),null===(n=this.shadowRoot)||void 0===n||n.appendChild(c);const w=document.body;w.style.backgroundImage="url(/dist/img/Landing.png)",w.style.backgroundSize="cover",w.style.backgroundRepeat="no-repeat"}}customElements.define("app-signin",y),function(t){t.btnSignIn="btnSignIn",t.btnAccount="btnAccount"}(k||(k={}));class S extends HTMLElement{static get observedAttributes(){return Object.keys({btnSignIn:null,btnAccount:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t,e,n;this.shadowRoot&&(this.shadowRoot.innerHTML="");const o=this.ownerDocument.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","/src/components/SignUp/signup.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(o);const s=this.ownerDocument.createElement("img");s.setAttribute("src","/dist/img/image 45.png"),s.classList.add("logoI");const i=this.ownerDocument.createElement("h1");i.innerText="Sign Up";const c=this.ownerDocument.createElement("section");c.classList.add("sect");const a=this.ownerDocument.createElement("form");a.classList.add("form"),c.appendChild(a);const r=this.ownerDocument.createElement("button");r.classList.add("go-out");const l=this.ownerDocument.createElement("img");l.setAttribute("src","/dist/img/X.png"),l.classList.add("img-out"),r.appendChild(l),r.addEventListener("click",(()=>{console.log("click edit"),b(d(h.LANDING))}));const u=this.ownerDocument.createElement("input");u.setAttribute("type","text"),u.setAttribute("placeholder","Name"),u.classList.add("inpuut");const m=this.ownerDocument.createElement("input");m.setAttribute("type","email"),m.setAttribute("placeholder","E-mail"),m.classList.add("inpuut");const p=this.ownerDocument.createElement("input");p.setAttribute("type","password"),p.setAttribute("placeholder","Password"),p.classList.add("inpuut");const g=this.ownerDocument.createElement("button");g.classList.add("loginbtn"),g.innerText="Create Account",g.addEventListener("click",(()=>{console.log("click edit"),b(d(h.EDIT_PROFILE))}));const w=this.ownerDocument.createElement("a");w.innerText="Already have an account? Sign in",a.appendChild(r),a.appendChild(i),a.appendChild(u),a.appendChild(m),a.appendChild(p),a.appendChild(g),a.appendChild(w),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s),null===(n=this.shadowRoot)||void 0===n||n.appendChild(c);const E=document.body;E.style.backgroundImage="url(/dist/img/Landing.png)",E.style.backgroundSize="cover",E.style.backgroundRepeat="no-repeat"}}customElements.define("app-signup",S),function(t){t.img="img",t.btn="btn"}(D||(D={}));class _ extends HTMLElement{static get observedAttributes(){return Object.keys({img:null,btn:null})}attributeChangedCallback(t,e,n){this[t]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var t,e;this.shadowRoot&&(this.shadowRoot.innerHTML="");const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/components/uploadd/upload.css"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const o=this.ownerDocument.createElement("section"),s=this.ownerDocument.createElement("h1");s.innerText="Upload a new post to your feed",o.appendChild(s);const i=this.ownerDocument.createElement("hr");o.appendChild(i);const c=this.ownerDocument.createElement("img");c.setAttribute("src","/dist/img/upload.png"),c.classList.add("img-out"),o.appendChild(c);const a=this.ownerDocument.createElement("button");a.innerText="Choose a photo from your computer",a.classList.add("green-button"),o.appendChild(a),null===(e=this.shadowRoot)||void 0===e||e.appendChild(o)}}customElements.define("app-upload",_);class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("section");this.shadowRoot.appendChild(t);const e=this.ownerDocument.createElement("div");e.setAttribute("class","name"),t.appendChild(e);const n=this.ownerDocument.createElement("div");n.setAttribute("class","general"),t.appendChild(n);const o=this.ownerDocument.createElement("div");o.setAttribute("class","text"),t.appendChild(o);const s=this.ownerDocument.createElement("input");s.innerText="Name",e.appendChild(s);const i=this.ownerDocument.createElement("input");i.innerText="User Name",e.appendChild(i);const c=this.ownerDocument.createElement("input");c.innerText="What gym do you go to?",n.appendChild(c);const a=this.ownerDocument.createElement("input");a.innerText="How many times do you train a week?",n.appendChild(a);const r=this.ownerDocument.createElement("input");r.innerText="Location",n.appendChild(r);const l=this.ownerDocument.createElement("input");l.innerText="City",n.appendChild(l);const u=this.ownerDocument.createElement("input");u.innerText="Description",n.appendChild(u);const m=this.ownerDocument.createElement("img");m.setAttribute("src","/dist/img/usuario.png"),o.appendChild(m);const p=this.ownerDocument.createElement("button");p.innerText="Save",o.appendChild(p),p.addEventListener("click",(()=>{console.log("click main"),b(d(h.MAIN))}))}}}customElements.define("my-edit",I);class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){console.log("My Profile"),this.shadowRoot.innerHTML="";const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/screens/Profile.css"),this.shadowRoot.appendChild(e);const n=this.ownerDocument.createElement("div");n.setAttribute("class","container"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const o=this.ownerDocument.createElement("my-nav");n.appendChild(o);const s=this.ownerDocument.createElement("my-feed");n.appendChild(s)}}}customElements.define("my-profile",M);class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("app-landing");this.shadowRoot.appendChild(t)}}}customElements.define("landing-container",x);class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("app-signin");this.shadowRoot.appendChild(t)}}}customElements.define("signin-container",H);class N extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("app-signup");this.shadowRoot.appendChild(t)}}}customElements.define("signup-container",N);class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}render(){var t;if(this.shadowRoot){console.log("My Edit"),this.shadowRoot.innerHTML="";const e=this.ownerDocument.createElement("div");e.setAttribute("class","container"),null===(t=this.shadowRoot)||void 0===t||t.appendChild(e);const n=this.ownerDocument.createElement("my-nav");this.shadowRoot.appendChild(n);const o=this.ownerDocument.createElement("my-edit");e.appendChild(o)}}}customElements.define("my-editcontainer",O);class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("app-upload");this.shadowRoot.appendChild(t)}}}customElements.define("upload-container",P);class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),g(this)}connectedCallback(){this.render()}render(){var t,e,n;if(this.shadowRoot)switch(m.screen){case h.MAIN:this.shadowRoot.innerHTML="";const o=this.ownerDocument.createElement("main-container");null===(t=this.shadowRoot)||void 0===t||t.appendChild(o);break;case h.EDIT_PROFILE:this.shadowRoot.innerHTML="";const s=this.ownerDocument.createElement("my-edit");this.shadowRoot.appendChild(s);break;case h.MESSAGE:this.shadowRoot.innerHTML="Message";break;case h.NEW_POST:this.shadowRoot.innerHTML="";const i=this.ownerDocument.createElement("app-upload");null===(e=this.shadowRoot)||void 0===e||e.appendChild(i);break;case h.PROFILE:this.shadowRoot.innerHTML="";const c=this.ownerDocument.createElement("my-profile");null===(n=this.shadowRoot)||void 0===n||n.appendChild(c);break;case h.LANDING:this.shadowRoot.innerHTML="";const a=this.ownerDocument.createElement("app-landing");this.shadowRoot.appendChild(a);break;case h.SING_UP:this.shadowRoot.innerHTML="";const r=this.ownerDocument.createElement("app-signup");this.shadowRoot.appendChild(r);break;case h.LOG_IN:this.shadowRoot.innerHTML="";const d=this.ownerDocument.createElement("app-login");this.shadowRoot.appendChild(d);break;case h.SIGN_IN:this.shadowRoot.innerHTML="";const l=this.ownerDocument.createElement("app-signin");this.shadowRoot.appendChild(l)}}}customElements.define("app-container",j)})();