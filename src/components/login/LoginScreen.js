import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {types} from '../../types/types'
import { AuthContext } from '../../auth/authContext'
import styled from 'styled-components'

const Contenedor = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  justify-content: center;  
  align-items: center;
  background-color: #F04E4A;
`

const TarjetaLogin = styled.div`
  width: 50%;
  height: 50%;
  display: flex; 
  justify-content: center;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  background-color: white;
`

const TituloLogin = styled.div`
  color: #F04E4A;
  font-size: 2rem;
`

export const LoginScreen = () => {

    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {name: 'Victor'}
        }

        dispatch(action)

        const lastPath = localStorage.getItem('lastPath') || '/marvel'

        navigate(lastPath, {
           replace: true
        })
    } 

    return (
        <Contenedor>
            <TarjetaLogin>
                <TituloLogin>Binvenido Inicia Sesión</TituloLogin>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >Login</button>
            </TarjetaLogin>
        </Contenedor>
    )
}
