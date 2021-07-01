class Cards extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var shadowRoot = this.attachShadow({ mode: "open" });
    const template = this.render()
    const animation = this.animation();
    const card = document.createElement("template");
    card.style.display = "block";
    // template.style.display = "block";
    card.innerHTML += template;
    card.innerHTML += animation;
    shadowRoot.appendChild(document.importNode(card.content.cloneNode(true), true));
    let cardContainer = this.shadowRoot.querySelector(".card_container");
    cardContainer.addEventListener("click", () => {
      // console.log("message-banner closed", e);
      this.cardClick();
    });
    // template.addEventListener('mouseover', function (e) {
    //     this.cardClick();
    // });
    // cardContainer.addEventListener('mouseout', function () {
    //     this.cardClick();
    // })
  }
  render() {
    return `
        <div
        class="card_container"
        >  
            <div class="flip">
                <div class="card_front">
                    <slot name="title" ></slot>
                    <img loading="lazy"  src="${this.getAttribute('imageInput')}" alt="member of PoE" width="250" height="194">
                    <slot name="subtitle"></slot>
                    <slot name="text"></slot>
                    <slot name="button"></slot>
                </div>
                <div class="card_back">
                    <slot name="description"></slot>
                </div>
            </div>
        </div>`
  }
  animation() {
      return `
        <style>
            img{ 
                border-radius: 50%; 
            }
            .card_front {
                z-index: 20;
                transform: rotateY(0deg);
                background-position: -86px -69px;

            }
            
            .card_back {
                transform: rotateY(180deg);
                background-position: -915px -867px;
                background-color: red;

            }
            .card_front, .card_back{
                backface-visibility: hidden;
                width: 320px; 
                height:513px;  
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                position: absolute;
                top: 0;
                left: 0;
                border: thin solid #ccc;
                border-radius: 10px;
                background-color: white;
                text-align: center;
                line-height: 1.5em
            }
            .flip{
                transition: 0.6s;
                transform-style: preserve-3d;
            }
            .flip_card .flip{
                transform: rotateY(180deg);
                transform-origin: center;
            }
            .card_container{
                transition: 0.6s;
                width: 320px; 
                height:513px;  
                background-color: ${this.getAttribute('backColor')};
            }
            .card_container.slide_over{
                transform: translate(0px);
            } 
        </style>`;
    }
    // flip card
  cardClick(evt) {
    let cardContainer = this.shadowRoot.querySelector(".card_container");
    cardContainer.classList.toggle("flip_card");
    cardContainer.classList.toggle("slide_over");
  }
  static get observedAttributes() {
    return ["imageInput", "backColor"];
  }
}
window.customElements.define("member-cards", Cards);
export default Cards