const Router = require('express')
const router = new Router()
const superheroController = require('../controllers/superheroController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), superheroController.create)
router.get('/', superheroController.getAll)
router.get('/:id', superheroController.getOne)
router.put('/:id', superheroController.getOne)

module.exports = router
