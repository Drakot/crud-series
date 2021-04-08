const express = require("express")
const router = express.Router();
const serieController = require("../controllers/serie")


router.post("/serie",serieController.saveSerie)
router.get("/series",serieController.getSeries)
router.get("/serie/:id",serieController.getSerie)
router.put("/serie/:id",serieController.updateSerie)
router.delete("/serie/:id",serieController.deleteSerie)


module.exports = router