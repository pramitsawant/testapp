const path = require('path');
var express = require('express');
var router = express.Router();
const controller = require(path.join(__dirname,'..', 'controllers', 'userController.js'));

router.get('/', controller.getEntities);
router.post('/', controller.addEntity);
router.get('/:id', controller.getEntityById);
router.delete('/:id', controller.deleteEntityById);
router.put('/:id', controller.updateEntityById);

exports.routes = router;