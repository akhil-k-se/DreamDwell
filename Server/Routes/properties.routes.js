const express = require("express");
const  getAllProperties  = require("../Controllers/property.controller.js");
const upload = require("../middlewares/multer.middleware.js");

const router = express.Router();

router.route("/properties").get(
    upload.single("image"),
    getAllProperties
);

module.exports = router;
