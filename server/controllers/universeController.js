const {Universe} = require('../models/models')
const ApiError = require('../error/ApiError');

class UniverseController {
    async create(req, res) {
        const {name} = req.body
        const universe = await Universe.create({name})
        return res.json(universe)
    }

    async getAll(req, res) {
        const universes = await Universe.findAll()
        return res.json(universes)
    }

}

module.exports = new UniverseController()
