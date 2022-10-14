import {makeAutoObservable} from "mobx";
export default class SuperheroStore {
    constructor() {
        this._types = []
        this._universes = []
        this._superheros = []
        this._favourites = []
        this._selectedType = {}
        this._selectedUniverse = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setUniverses(universes) {
        this._universes = universes
    }
    setSuperheros(superheros) {
        this._superheros = superheros
    }


    setFavourites(favourites){
        this._favourites = favourites
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedUniverse(universe) {
        this.setPage(1)
        this._selectedUniverse = universe
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get types() {
        return this._types
    }
    get universes() {
        return this._universes
    }
    get superheros() {
        return this._superheros
    }


    get favourites() {
        return this._favourites
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedUniverse() {
        return this._selectedUniverse
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}