let express = require('express');

let router = express.Router();

let apartController = require("./controllers/apartController");
//listes des routes vers les contrôleurs

router.get('/', (req, res) => {
    res.redirect("/apart");
});

router.get('/apart', apartController.apartList);

router.post("/apart/enregistrer", apartController.enregistrer);

router.get("/apart/retour", apartController.retour);

router.post("/apart/calcul", apartController.calcul);

module.exports = router;