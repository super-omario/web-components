export default class CTA extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <style>
        ::slotted(h2) {
          color: red;
        }
      </style>

      <section>
        <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center ltr:sm:text-left rtl:sm:text-right">
            <slot name="title"></slot>

            <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure
              architecto quae voluptatum beatae excepturi dolores.
            </p>

            <div class="mt-4 sm:mt-8">
              <slot name="button"></slot>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
