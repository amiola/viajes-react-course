import { useContext } from "react"
import { Link } from "react-router-dom"
import Contexto from "../context/Contexto"

const Destino = ({nombre, imagen, situacion}) => {

  const {contratacion} = useContext(Contexto);
  const encontrado = contratacion.find(objeto => objeto.sitio === nombre);

    //el link de la imagen está en bruto, entonces tenemos que crear ese link hacia la carpeta de imágenes
    const ruta = `/images/${imagen}`
  return (
    <>
<div className="destino">
    <div className="nombre">{nombre}</div>
    <div className="situacion">{situacion}</div>
    <img src={ruta} alt={nombre} />
    <div className="btns-destino">
    <Link to={`/destino/${nombre}`}>Más info</Link>
    {(encontrado) && <div className="circulo"></div>}
    </div>
</div>
    </>
    
  )
}

export default Destino