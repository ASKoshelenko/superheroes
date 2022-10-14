import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $host.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createUniverse = async (universe) => {
    const {data} = await $authHost.post('api/universe', universe)
    return data
}

export const fetchUniverses = async () => {
    const {data} = await $host.get('api/universe', )
    return data
}

export const createSuperhero = async (superhero) => {
    const {data} = await $authHost.post('api/superhero', superhero)
    return data
}

export const fetchSuperheros = async (typeId, universeId, page, limit= 5) => {
    const {data} = await $host.get('api/superhero', {params: {
            typeId, universeId, page, limit
        }})
    return data
}

export const fetchOneSuperhero = async (id) => {
    const {data} = await $host.get('api/superhero/' + id)
    return data
}

export const addToFavourites = async (superheroId) => {
    const {response} = await $authHost.post('api/favourites_superheroes', superheroId)
    return response
}

export const getFavourites = async () => {
    const {data} = await $authHost.get('api/favourites_superheroes')
    return data
}