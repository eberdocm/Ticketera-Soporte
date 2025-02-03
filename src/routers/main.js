const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.post("/", mainController.processSend)

router.get("/staff", mainController.staff)
router.post("/staff", mainController.staffEnviado)

router.get("/enviado", mainController.enviado);

module.exports = router;