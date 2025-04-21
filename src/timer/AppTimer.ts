export default class AppTimer extends HTMLElement {
  private label: HTMLSpanElement;
  private value: number;
  private span: HTMLSpanElement;
  private timer!: number;

  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();

    this.label = document.createElement('span');

    this.value = 0;
    this.span = document.createElement('span');
    this.span.classList.add(
      'rounded-full',
      'bg-purple-100',
      'px-2.5',
      'py-0.5',
      'ml-4',
      'text-sm',
      'whitespace-nowrap',
      'text-purple-700',
    );
    this.span.innerHTML = this.value.toString();

    this.appendChild(this.label);
    this.appendChild(this.span);
  }

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.value++;
      this.span.innerHTML = this.value.toString();
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string) {
    if (name === 'label' && newValue !== oldValue) {
      this.label.innerHTML = newValue;
    }
  }
}
