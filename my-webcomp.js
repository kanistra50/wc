export class MyWebComp extends HTMLElement {

    connectedCallback() {
        const tplEl = document.querySelector('#myWebCompTemplate');
        const html = document.importNode(tplEl.content, true);        

        this.attachShadow({mode: 'open'});
        const context = this.shadowRoot;
        context.appendChild(html);
        context.querySelector('#helloLabel').textContent += ` ${this.getAttribute('greet-name')}`;

    }
    showMessage(event) {
        alert(`Message from ${this.getAttribute("greet-name")}`);
    }
}
// 
// export { MyWebComp as myWebComp };
