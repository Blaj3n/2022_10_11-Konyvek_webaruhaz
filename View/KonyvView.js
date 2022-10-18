class KonyvView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem = elem
        // console.log("KonyvView");
        console.log(elem);
        //egy táblázat sort jelenítsünk meg
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="mod${elem.id}">Módosít</button></td>
        <td><button id="del${elem.id}">Töröl</button></td>
        </tr>`);
        //gombok eseménykezelői
        this.sorElem=szuloElem.children("tr:last-child");
        console.log(this.sorElem)
        this.modositElem=$(`#mod${elem.id}`);
        this.torolElem=$(`#del${elem.id}`);
        //módosít gomb eseménykezelő
        this.modositElem.on("click", () =>{
            console.log("Módosít a View-ban")
            this.kattintasTrigger()
        })
    }
    kattintasTrigger(){
        console.log("Módosít a triggerben")
        const esemeny = new CustomEvent("modosit",{
            detail:this.#elem.id})
            window.dispatchEvent(esemeny);
    }
}

export default KonyvView;