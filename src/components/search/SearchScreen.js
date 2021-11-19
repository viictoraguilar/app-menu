import {useMemo} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getPlatillosByName } from '../../selectors/getPlatillosByName'
import { FoodCard } from '../food/FoodCard'

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)
    console.log(q);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    })

    const {searchText } = formValues
    const platillosFiltered = useMemo(() => getPlatillosByName(q), [q]) //getPlatillosByName(q)

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }
     
    return (
        <>
            <h1>Busquedas</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Buscar un platillo"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange }
                        />

                        <button 
                            className="btn btn-outline-primary mt-1"
                            type="submit"
                        >Buscar ...</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un platillo</div>
                            : (platillosFiltered.length === 0) && <div className="alert alert-danger">No hay resultados: {q} </div>
                    }
                    {
                        platillosFiltered.map(platillo => (
                            <FoodCard
                                key={platillo.id}
                                {...platillo}
                            />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
