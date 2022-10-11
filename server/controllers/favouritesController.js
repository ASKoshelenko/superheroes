const { Superhero, FavouritesSuperheroes, Favourites } = require("../models/models")

class FavouritesController {

    async addToFavourites(req,res,next){
        const user = req.user
        const {superheroId} = req.body
        const favourites = await FavouritesSuperheroes.create({favouritesId : user.id, superheroId : superheroId})
        return res.json(favourites)
    }

    async getFavouritesUser(req,res){
        const {id} = req.user
        const favourites = await FavouritesSuperheroes.findAll({include: {
                model: Superhero
            }, where: {favouritesId: id}})

        return res.json(favourites)
    }

}

module.exports = new FavouritesController()