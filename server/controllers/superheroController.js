const uuid = require('uuid')
const path = require('path');
const {Superhero, SuperheroInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class SuperheroController {
    async create(req, res, next) {
        try {
            let {name, real_name, origin_description, universeId, super_powers, catch_phrase, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const superhero = await Superhero.create({name, real_name, origin_description, universeId, super_powers, catch_phrase, typeId, img: fileName});
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    SuperheroInfo.create({
                        title: i.title,
                        description: i.description,
                        superheroId: superhero.id
                    })
                )
            }
            return res.json(superhero)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try{
            let {universeId, typeId, limit, page} = req.query
            page = page || 1

            limit = limit || 5

            let offset = page * limit - limit
            let superheroes;
            if (!universeId && !typeId) {
                superheroes = await Superhero.findAndCountAll({limit, offset})
            }
            if (universeId && !typeId) {
                superheroes = await Superhero.findAndCountAll({where:{universeId}, limit, offset})
            }
            if (!universeId && typeId) {
                superheroes = await Superhero.findAndCountAll({where:{typeId}, limit, offset})
            }
            if (universeId && typeId) {
                superheroes = await Superhero.findAndCountAll({where:{typeId, universeId}, limit, offset})
            }
            return res.json(superheroes)
        } catch(e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const superhero = await Superhero.findOne(
            {
                where: {id},
                include: [{model: SuperheroInfo, as: 'info'}]
            },
        )
        return res.json(superhero)
    }
}

module.exports = new SuperheroController()
