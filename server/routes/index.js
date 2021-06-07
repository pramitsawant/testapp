const path = require('path');
var express = require('express');
var router = express.Router();

router.use("/test", require("./testRoutes.js").routes);
router.use("/user", require("./userRoutes.js").routes);
router.use("/asset", require("./assetRoutes.js").routes);
router.use("/template-category", require("./templateCategoryRoutes.js").routes);
router.use("/template", require("./templateRoutes.js").routes);

exports.router = router;