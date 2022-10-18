class KonyvPublicView {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    console.log(elem);
    //egy divet jelenítsünk meg
    szuloElem.append(`<div>
            <h1>${elem.id}</h1>
            <h1>${elem.cim}</h1>
            <h1>${elem.szerzo}</h1>
            <h1>${elem.ar}</h1>
            <button id="mod${elem.id}">Módosít</button>
            <button id="del${elem.id}">Töröl</button>
          </div>`);
    //gombok eseménykezelői
    this.sorElem = szuloElem.children("div:last-child");
    console.log(this.sorElem);
    this.modositElem = $(`#mod${elem.id}`);
    this.torolElem = $(`#del${elem.id}`);
    //módosít gomb eseménykezelő
    this.modositElem.on("click", () => {
      console.log("Módosít a View-ban");
      this.kattintasModositTrigger();
    });
    //töröl gomb eseménykezelő
    this.torolElem.on("click", () => {
      console.log("Töröl a View-ban");
      this.kattintasTorolTrigger();
    });
  }
  kattintasModositTrigger() {
    console.log("Módosít a triggerben");
    const esemeny = new CustomEvent("modosit", {
      detail: this.#elem.id,
    });
    window.dispatchEvent(esemeny);
  }
  kattintasTorolTrigger() {
    console.log("Töröl a triggerben");
    const esemeny = new CustomEvent("torol", {
      detail: this.#elem.id,
    });
    window.dispatchEvent(esemeny);
  }
}

export default KonyvPublicView;
