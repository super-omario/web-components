class AppFooter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch('/src/footer/content.html').then((res) => res.text());
    this.innerHTML = html;
  }
}

customElements.define('app-footer', AppFooter);
