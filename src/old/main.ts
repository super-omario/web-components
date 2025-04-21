import '../style.css';

import typescriptLogo from '/typescript.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/" target="_blank">
      <img src="${typescriptLogo}" alt="TypeScript logo" />
    </a>
    <h1>Web Components Playground</h1>
    <div class="my-4">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
