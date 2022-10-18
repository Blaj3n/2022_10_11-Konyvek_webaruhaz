import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr></table>`);
        this.tablaElem = szuloElem.children("table:last-child");

        tomb.forEach(konyv => {
            const konyvem = new KonyvView(konyv,this.tablaElem);
        });
    }
}

export default KonyvekView;