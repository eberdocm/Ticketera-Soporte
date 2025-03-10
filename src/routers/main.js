const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const isLogged = require("../middlewares/isLogged.js");

router.get("/login", mainController.login);
router.post("/login", mainController.processLogin);

router.get("/", isLogged, mainController.index);
router.post("/", mainController.processSend);

router.get("/staff", isLogged, mainController.staff);
router.post("/staff", mainController.staffEnviado);

router.get("/enviado", isLogged, mainController.enviado);

router.get("/instructivos", isLogged, mainController.instructivos);

module.exports = router;
