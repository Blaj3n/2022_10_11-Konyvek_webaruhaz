import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);

        $(window).on("modosit", (event)=>{
            console.log("controllerben módosít",event.detail)
            konyvmodel.adatModosit(event.detail)
        })
    }

    konyvAdatok(tomb) {
        let szuloElem = $("main")
        new KonyvekView(tomb, szuloElem);

    }
}

export default KonyvController;