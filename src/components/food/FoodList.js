import {useMemo} from 'react'
import { FoodCard } from './FoodCard'
import {getPlatillosByPublisher} from '../../selectors/getPlatillosByPublisher'

export const FoodList = ({chef}) => {

    const platillos = useMemo(() => getPlatillosByPublisher(chef), [chef])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
                {
                    platillos.map(platillo => (
                        <FoodCard 
                            key={platillo.id}
                            {...platillo}
                        />
                    ))
                }
        </div>
    )
}
