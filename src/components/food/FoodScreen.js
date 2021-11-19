import { useMemo } from 'react'
import {useParams, Navigate, useNavigate} from 'react-router-dom'
import { getPlatilloById } from '../../selectors/getPlatilloById'

export const FoodScreen = () => {


    const {menuId} = useParams()
    const navigate = useNavigate()

    const menu = useMemo(()  => getPlatilloById(menuId), [menuId]) 

    const handleReturn = () => {
        navigate(-1)
    }

    if(!menu) {
        return <Navigate to='/' />
    } 

    const {
        id,
        publisher,
        sabor,
        ciudad,
        calificacion,
        platillo
    } = menu
    
    const imagePath = `/assets/menu/${id}.jpg`

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={imagePath} 
                    alt={platillo}
                    className="img-thumbnail animate__animated animate__bounceInLeft"    
                />
            </div>

            <div className="col-md-8 animate__animated animate__bounceIn">
                <h3>{platillo}</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b>Sabor:</b> {sabor} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b>Ciudad:</b> {ciudad} </li>
                </ul>

                <h5 className="mt-3">Calificacion</h5>
                <p>{calificacion}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >Regresar </button>
            </div>
        </div>
    )
}
