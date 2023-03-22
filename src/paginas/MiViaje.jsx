import { useContext } from "react"
import { Link } from "react-router-dom"
import Contexto from "../context/Contexto"
import types from "../context/types"

const MiViaje = () => {
  const {contratacion, dispatch2, referencia, suma, setSuma} = useContext(Contexto)
  return (
    <>
    <section className="ruta">
      <h3>Lugares a visitar:</h3>

   {(contratacion.length<1) && <div className="aviso">
    <p>Todavía no has contratado ninguna actividad. <br />
      Haz click en <Link to='/cp'>Centro y Patagonia</Link> o 
      <Link to='/no'>Noroeste</Link> para ver nuestras ofertas.</p>
    </div>}

      {contratacion.map((lugar)=>
          <div className="lugar-visitar" key={lugar.sitio}>
            {lugar.sitio} (USD {lugar.precio}) <button onClick={
              ()=>{
                setSuma(+suma - lugar.precio);
                dispatch2({
                  type: types.anular,
                  payload: {sitio: lugar.sitio}
                })
              }
            }  className='btn anular'>Anular</button>
          </div>
      )}
      <h3>Referencia: {referencia}</h3>
      <h3>Total a pagar: USD {suma}.-</h3>
    </section>
    </>
  )
}

export default MiViaje