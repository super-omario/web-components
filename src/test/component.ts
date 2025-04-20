class TestComponent extends HTMLElement
{
    constructor () {
        super();
        this.innerHTML = 'Test Component';
    }
}

customElements.define('test-component', TestComponent);
