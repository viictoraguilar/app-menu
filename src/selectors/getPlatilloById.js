import {platillos} from '../data/platillos'

export const getPlatilloById = (id = '') => {
    return platillos.find( platillo => platillo.id === id)
}
