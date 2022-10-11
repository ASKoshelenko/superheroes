const Router = require('express')
const router = new Router()
const universeController = require('../controllers/universeController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'),universeController.create)
router.get('/', universeController.getAll)

module.exports = router
