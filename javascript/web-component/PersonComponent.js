class PersonComponent extends HTMLElement {
  static observedAttributes = ["fname", "lname"];

  constructor() {
    super();
    this.addEventListener("click", () => {
      console.log(`initial: ${this.style.fontSize}`);

      this.style.fontSize = `${parseInt(this.style.fontSize + 0) + 2}`;

      // if (this.style.fontSize === "") {
      //   this.style.fontSize = 10;
      // } else {
      //   this.style.fontSize = parseInt(this.style.fontSize, 10) + 2;
      // }
      console.log("done:", this.style.fontSize);
    });
  }

  render() {
    const first = this.getAttribute("fname");
    const last = this.getAttribute("lname");
    this.textContent = `${first} ${last}`;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("bc-person", PersonComponent);
