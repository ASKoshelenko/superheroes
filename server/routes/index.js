const Router = require('express')
const router = new Router()
const superheroRouter = require('./superheroRouter')
const userRouter = require('./userRouter')
const universeRouter = require('./universeRouter')
const typeRouter = require('./typeRouter')
const favouritesRouter = require('./favouritesRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/universe', universeRouter)
router.use('/superhero', superheroRouter)

router.use('/favourites', favouritesRouter)

module.exports = router
