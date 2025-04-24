import Card from './Card';
import '../style.css';

customElements.define('app-card', Card);

document.querySelector('app-card')?.addEventListener('image-click', (event) => {
  console.log('The image is clicked', event);
});
