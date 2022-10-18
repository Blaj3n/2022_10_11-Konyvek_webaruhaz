import KonyvPublicView from "./KonyvekPublicView.js";

class KonyvekPublicView {
  constructor(tomb, szuloElem) {
    szuloElem.append(`<div class="konyvek">

            </div>`);
    this.divElem = szuloElem.children("div:last-child");
    tomb.forEach(konyvek => {
      const konyvem = new KonyvPublicView(konyvek, this.divElem);
    });
  }
}

export default KonyvekPublicView;
