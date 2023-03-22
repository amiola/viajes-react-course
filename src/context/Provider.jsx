import { useReducer, useState } from "react"
import Contexto from "./Contexto"
import miReducer from "./miReducer"
import miReducer2 from "./miReducer2"
import types from "./types"


const init=()=>{
  const user = localStorage.getItem('valor')
  return {
    logueado: !!user, //esto evalúa si existe o no un localstorage, por más que su valor sea false
    usuario: user
  }
 }

 const valorInicial = [];

const Provider = ({children}) => {

  const [autentificacion, dispatch] = useReducer(miReducer, {}, init);
  const [contratacion, dispatch2] = useReducer(miReducer2, valorInicial);
  const [referencia, setReferencia] = useState('');
  const [suma, setSuma] = useState(0);

  const loguearse = (user='')=>{
    const action = {
      type: types.login,
      payload: user
    }
    localStorage.setItem('valor', user)
    dispatch(action)
  }
  
  const desloguearse = ()=>{
    const action = {
      type: types.logout,
      payload: null
    }
    localStorage.removeItem('valor')
    dispatch(action)
  }
  

  return (
    // dentro de value le voy a poner todo lo que van a pder acceder los hijos (children)
    <Contexto.Provider value={{
      // el spread operator es importante para poder acceder a las variables o propiedades directamente
      contratacion,
      ...autentificacion,
      loguearse,
      desloguearse,
      dispatch2,
      referencia,
      setReferencia,
      suma,
      setSuma
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider