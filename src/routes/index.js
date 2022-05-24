const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hola mundo by Israel Apunte");
});

module.exports = router;
