import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import Contexto from "../context/Contexto";
export default function Nav() {

    const {desloguearse} =useContext(Contexto)

    const navegacion = useNavigate();
    const logout =()=>{
        navegacion('/login',{replace:true})
        desloguearse()
    }
  return (
    <>
    <nav>
        <div className="links"> 
        <NavLink to='/cp'>Centro y Patagonia</NavLink>
        <NavLink to='/no'>Noroeste</NavLink>
        <NavLink to='/viaje'>Mi viaje</NavLink>
        </div>
        <button onClick={logout} >Logout</button>
    </nav>
    </>
  )
}
