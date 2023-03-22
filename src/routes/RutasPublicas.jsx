import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Contexto from "../context/Contexto"

const RutasPublicas = ({children}) => {
    const {logueado} = useContext(Contexto)
  return (!logueado)? children: <Navigate to='/'/>
}

export default RutasPublicas