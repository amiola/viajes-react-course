import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Contexto from "../context/Contexto";
import types from "../context/types";
import data from "../datos/data";

const Comprar = () => {
    const {nombre} = useParams();
    const destinoEncontrado = data.find(dato=> dato.nombre === nombre);

    const navegacion = useNavigate();
    const volver = () => {
        // accede a la lista de páginas y toma la última
        navegacion(-1);
    }
    
    const {dispatch2, contratacion} = useContext(Contexto);

    const encontrado = contratacion.find(objeto => objeto.sitio === nombre);

    const contratar = ()=>{
      const action = {
        type: types.contratar,
        payload: {
          sitio: nombre,
          precio: destinoEncontrado.precio
        }
      }
      dispatch2(action)
    }

    const anular = ()=>{
      const action = {
        type: types.anular,
        payload: {
          sitio: nombre
        }
      }
      dispatch2(action)
    }

    if(!destinoEncontrado){
      return <Navigate to='/'/>
     }
    const imagen = `/images/${destinoEncontrado.imagen}`
  return (
    <>
        <h1 className="nombre-grande">{nombre}</h1>
        <div className="servicios">{destinoEncontrado.servicio}</div>
        <div className='img-grande'>
        <div className="precio">USD {destinoEncontrado.precio}</div>
        <div className="btns-comprar">
        {(!encontrado) && <button className="btn contratar" onClick={contratar} >Contratar</button>}
        {(encontrado) && <button className="btn anular" onClick={anular} >Anular</button>}
        <button onClick={volver} className='btn volver'>Volver</button>
        </div>
        <img src={imagen} alt={nombre}/>
        </div>
    </>
  )
}

export default Comprar