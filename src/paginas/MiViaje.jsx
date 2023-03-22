import { useContext } from "react"
import Contexto from "../context/Contexto"
import types from "../context/types"

const MiViaje = () => {
  const {contratacion, dispatch2} = useContext(Contexto)
  return (
    <>
    <section className="ruta">
      <h3>Lugares a visitar:</h3>
      {contratacion.map((lugar)=>
          <div className="lugar-visitar" key={lugar.sitio}>
            {lugar.sitio} (USD {lugar.precio}) <button onClick={
              ()=>{
                dispatch2({
                  type: types.anular,
                  payload: {sitio: lugar.sitio}
                })
              }
            }  className='btn anular'>Anular</button>
          </div>
      )}
    </section>
    </>
  )
}

export default MiViaje