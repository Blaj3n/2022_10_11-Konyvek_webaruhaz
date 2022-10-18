class KonyvView {
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(elem);
        //egy táblázat sort jelenítsünk meg
        szuloElem.append(`<tr>
        <th>${elem.id}</th>
        <th>${elem.cim}</th>
        <th>${elem.szerzo}</th>
        <th>${elem.ar}</th>
        </tr>`);
    }
}

export default KonyvView;