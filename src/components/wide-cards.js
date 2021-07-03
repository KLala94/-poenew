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
        <div style="display: table;  background-color: ${this.getAttribute('backColor')};
        ">
            <img loading="lazy" src="${this.getAttribute('imageInput')}" alt="figure of PoE" width="320" height="194">
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
window.customElements.define("wide-cards", Cards);
export default Cards