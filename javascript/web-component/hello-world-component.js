class HelloWorldComponent extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}

customElements.define("hello-world", HelloWorldComponent);
