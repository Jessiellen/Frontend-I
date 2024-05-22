window.onload = async () => {

    // O teu código aqui...
}


class ItemComponent extends HTMLElement {
    #front;
    #touchX;
    #maxX = 84;
    #currentX;
    #callback;
  
    constructor() {
      super();
      this.#callback = (message) => console.log(message);
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      shadow.innerHTML = `
        <style>
          .button {
            position: relative;
            width: 100px;
            height: 50px;
            background-color: #eee;
            cursor: pointer;
          }
          .front {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #ccc;
            transition: transform 0.15s ease-in-out;
          }
        </style>
        <div class="button">
          <div class="front"></div>
        </div>
      `;
  
      this.view = shadow.querySelector(".button");
      this.#front = this.view.querySelector(".front");
      
      this.mouseUp = this.mouseUp.bind(this);
      this.mouseMove = this.mouseMove.bind(this);
      this.view.onmousedown = (ev) => this.#mouseDown(ev);
      this.view.onclick = () => {
        if (this.#currentX === 0) this.#callback("clicked");
      };
    }
  
    #mouseDown(ev) {
      this.#touchX = ev.x;
      document.addEventListener("mouseup", this.mouseUp);
      document.addEventListener("mousemove", this.mouseMove);
      this.#front.style.transition = 'none';
      this.#currentX = 0;
    }
  
    mouseUp() {
      document.removeEventListener("mouseup", this.mouseUp);
      document.removeEventListener("mousemove", this.mouseMove);
  
      if (this.#currentX === this.#maxX) this.#callback("delete!");
  
      this.#front.style.transition = 'transform .15s ease-in-out';
      this.#front.style.transform = 'translateX(0)';
  
      this.#touchX = 0;
    }
  
    mouseMove(ev) {
      this.#currentX = this.#touchX - ev.x;
      if (this.#currentX < 0) this.#currentX = 0;
      if (this.#currentX > this.#maxX) this.#currentX = this.#maxX;
  
      this.#front.style.transform = `translateX(-${this.#currentX}px)`;
    }
  }
  
  customElements.define('item-component', ItemComponent);
  
  window.onload = () => {
    const item = document.createElement('item-component');
    document.body.appendChild(item);
  };
  