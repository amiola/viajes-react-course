import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Contexto from "../context/Contexto"

const RutasPrivadas = ({children}) => {
    const {logueado} = useContext(Contexto)
  return logueado? children: <Navigate to='/login'/>
}

export default RutasPrivadas