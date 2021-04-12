const express = require("express")
const router = express.Router();
const serieController = require("../controllers/serie")
const platformController = require("../controllers/platform")
const statsController = require("../controllers/stats")
const userController = require("../controllers/user")

//Series
router.post("/serie",serieController.saveSerie)
router.get("/series",serieController.getSeries)
router.get("/serie/:id",serieController.getSerie)
router.put("/serie/:id",serieController.updateSerie)
router.delete("/serie/:id",serieController.deleteSerie)

//Platform
router.post("/platform",platformController.savePlatform)
router.get("/platform",platformController.getPlatforms)
router.get("/platform/:id",platformController.getPlatform)
router.put("/platform/:id",platformController.updatePlatform)
router.delete("/platform/:id",platformController.deletePlatform)

//user
router.delete("/user/:user/serie/:serie", userController.deleteSerie)

//Statistics
router.get("/stats/", statsController.stats)


module.exports = router