const express = require("express");
const router = express.Router();

const instructivosController = require("../controllers/instructivosController");
const isLogged = require("../middlewares/isLogged.js");

router.get("/personal", isLogged,instructivosController.personal);
router.get("/telecentro", isLogged, instructivosController.telecentro);
router.get("/ventas", isLogged, instructivosController.ventas);
router.get("/reten", isLogged, instructivosController.reten);
router.get("/pfizer", isLogged, instructivosController.pfizer);
router.get("/zurich", isLogged, instructivosController.zurich);

module.exports = router;