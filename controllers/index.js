const { Router } = require("express");
const router = Router();

router.use("/receive", require("./receive"));
// //router.use("/receive", require("./receive"));

module.exports = router;
