class AppHeader extends HTMLElement {
  async connectedCallback() {
    const html = await fetch('/src/header/content.html').then((res) => res.text());
    this.innerHTML = html;
  }
}

customElements.define('app-header', AppHeader);
