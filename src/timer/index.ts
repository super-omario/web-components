import AppTimer from './AppTimer';
import '../style.css';

customElements.define('app-timer', AppTimer);

document.querySelector('#change-label-button')?.addEventListener('click', () => {
  document.querySelector('app-timer')?.setAttribute('label', 'Mon Timer');
});

console.log(document.querySelectorAll('span'));
