import { Navigate, Route, Routes } from "react-router-dom"
import CP from "../paginas/CP"
import NO from "../paginas/NO"
import Nav from "../navBar/Nav"
import Comprar from "../paginas/Comprar"
import MiViaje from "../paginas/MiViaje"

const Router2 = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="cp" element={<CP/>} />
        <Route path="no" element={<NO/>} />
        <Route path="viaje" element={<MiViaje/>} />
        <Route path="/destino/:nombre" element={<Comprar/>}/>
        <Route path="/*" element={<Navigate to='cp'/>} />
    </Routes>
    </>
  )
}

export default Router2