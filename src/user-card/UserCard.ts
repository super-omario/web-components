export default class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <style>
        h3 {
          color: blue;
        }
      </style>
      <h3 class="my-4">Text inside the web component</h3>
      <p>${this.getAttribute('first-name')} ${this.getAttribute('last-name')}</p>
    `;
  }
}
