class Person2Component extends HTMLElement {
  static observedAttributes = ["fname", "lname"];

  constructor() {
    super();
    let template = document.getElementById("person");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));

    document.body.appendChild(templateContent);

    this.addEventListener("click", () => {
      console.log(`initial: ${this.style.fontSize}`);

      this.style.fontSize = `${parseInt(this.style.fontSize + 0) + 2}`;

      // if (this.style.fontSize === "") {
      //   this.style.fontSize = 10;
      // } else {
      //   this.style.fontSize = parseInt(this.style.fontSize, 10) + 2;
      //   console.log("increase:", this.style.fontSize);
      // }
      console.log("done:", parseInt(this.style.fontSize));
    });
  }

  render() {
    const first = this.getAttribute("fname");
    const last = this.getAttribute("lname");

    const p = this.querySelector("p");
    console.log(p);
    p.textContent = `${first} ${last}`;
  }

  connectedCallback() {
    setTimeout(() => {
      if (!this.rendered) {
        this.render();
        this.rendered = true;
      }
    }, 0);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("bc-person2", Person2Component);
