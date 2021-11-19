import { Link } from "react-router-dom"

export const FoodCard = ({
    id,
    platillo,
    publisher,
    sabor,
    ciudad,
    calificacion
}) => {

    const imagePath = `/assets/menu/${id}.jpg`

    return (
            <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img 
                            src={imagePath} 
                            alt={platillo} 
                            className="card-img"
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{platillo}</h5>
                            <p className="card-text">{sabor}</p>
                            
                            {
                                (sabor !== calificacion) &&
                                <p className="text-muted">{calificacion}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted"> {ciudad}</small>
                            </p>

                            <Link to={`/menu/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
