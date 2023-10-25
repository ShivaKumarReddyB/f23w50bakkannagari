var express = require("express");
var router = express.Router();

/* GET full name page. */
router.get("/", function (req, res, next) {
  res.render("mydata", { title: "Shiva Kumar Reddy Bakkannagari" });
});

module.exports = router;
