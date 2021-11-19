import {platillos} from '../data/platillos'

export const getPlatillosByName = (name = '') => {

    if(name.length === 0) {
        return []
    }

    name = name.toLowerCase()
    return platillos.filter( platillo => platillo.platillo.toLowerCase().includes(name))

}
