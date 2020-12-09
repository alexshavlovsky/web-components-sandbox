import {html, render} from './node_modules/lit-html/lit-html.js';
import {CheckboxElement, ButtonElement} from './dist/vaadin-components.js';

class CustomBox extends HTMLElement {

    connectedCallback() {
        this.counter = 0;
        this.caps = false;
        this.tmpl = () => html`
        <div>
        This is an ${this.getAttribute("boxName")}: {${this.counter}, ${this.caps}}
        </div>
        <vaadin-button @click=${_ => this.add()}>+</vaadin-button>
        <vaadin-checkbox @change=${e => this.cap(e.target.checked)}>Check</vaadin-checkbox>        
        `;
        this.render();
    }

    render() {
        render(this.tmpl(), this);
    }

    add() {
        this.counter++;
        this.render();
    }

    cap(checked) {
        this.caps = checked;
        this.render();
    }
}

customElements.define("custom-box", CustomBox);
