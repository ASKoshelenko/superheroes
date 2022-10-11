const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Favourites = sequelize.define('favourites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavouritesSuperheroes = sequelize.define('favourites_superheroes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Superhero = sequelize.define('superhero', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    real_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    origin_description: {type: DataTypes.STRING, unique: true, allowNull: false},
    super_powers: {type: DataTypes.STRING, unique: true, allowNull: false},
    catch_phrase: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Universe = sequelize.define('universe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const SuperheroInfo = sequelize.define('superhero_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeUniverse = sequelize.define('type_universe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Favourites)
Favourites.belongsTo(User)

Favourites.hasMany(FavouritesSuperheroes)
FavouritesSuperheroes.belongsTo(Favourites)

Type.hasMany(Superhero)
Superhero.belongsTo(Type)

Universe.hasMany(Superhero)
Superhero.belongsTo(Universe)

Superhero.hasMany(FavouritesSuperheroes)
FavouritesSuperheroes.belongsTo(Superhero)

Superhero.hasMany(SuperheroInfo, {as: 'info'});
SuperheroInfo.belongsTo(Superhero)

Type.belongsToMany(Universe, {through: TypeUniverse })
Universe.belongsToMany(Type, {through: TypeUniverse })

module.exports = {
    User,
    Favourites,
    FavouritesSuperheroes,
    Superhero,
    Type,
    Universe,
    TypeUniverse,
    SuperheroInfo
}





