class Cards extends HTMLElement {
  constructor() {
    super();

  }
  connectedCallback() {
    var shadowRoot = this.attachShadow({ mode: "open" });
    const template = this.render()
    const card = document.createElement("template");
    card.style.display = "block";
    // template.style.display = "block";
    card.innerHTML = template;
    shadowRoot.appendChild(document.importNode(card.content.cloneNode(true), true));
  }
  render() {
    return `
        <div style="width: 320px; height:513px;  background-color: ${this.getAttribute('backColor')};
        ">
            <img src="${this.getAttribute('imageInput')}" alt="figure of PoE" width="320" height="194">
            <slot name="title"></slot>
            <slot name="subtitle"></slot>
            <slot name="text"></slot>
            <slot name="button"></slot>
        </div>`
  }
  static get observedAttributes() {
    return ["imageInput", "backColor"];
  }
}
window.customElements.define("main-cards", Cards);
export default Cards