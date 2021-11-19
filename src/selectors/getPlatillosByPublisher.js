import { platillos } from "../data/platillos";

export const getPlatillosByPublisher = (chef) => {

    const validChef = ['Maria Dolores']
    if(!validChef.includes(chef)) {
        throw new Error(chef + ' is not a valid chef')
    }

    return platillos.filter(platillo => platillo.chef === chef)
}
 