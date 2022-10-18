class KonyvView {
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(elem);
        //egy táblázat sort jelenítsünk meg
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        </tr>`);
    }
}

export default KonyvView;