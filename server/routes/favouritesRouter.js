const Router = require('express')
const router = new Router()

const favouritesController = require('../controllers/favouritesController')

const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware , favouritesController.getFavouritesUser)
router.post('/', authMiddleware , favouritesController.addToFavourites)


module.exports = router