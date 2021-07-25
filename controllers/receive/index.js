const { Router } = require("express");
const router = Router();
const ctrl = require("./receive.crtl");

router.get("/", ctrl.get_Token);

module.exports = router;
