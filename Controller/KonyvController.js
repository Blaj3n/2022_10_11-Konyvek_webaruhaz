import KonyvekView from "../View/KonyvekView.js";

class KonyvController {
    constructor() {
        console.log("KonyvController");
        new KonyvekView();
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);
    }

    konyvAdatok(tomb) {
        console.log(tomb);
    }
}

export default KonyvController;