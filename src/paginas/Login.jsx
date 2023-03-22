import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

export default function Login() {
  const {loguearse, setReferencia}= useContext(Contexto)
  const navegacion = useNavigate();
  const login =()=>{
    navegacion('/',{replace:true})
    loguearse('am')
  }

  const registro = (e)=>{
    setReferencia(e.currentTarget.value)
  }

  return (
    <>
    <section className="login">
    <h1>Vive el país:</h1>
      <label htmlFor="referencia">Tu nombre:</label>
      <input type="text" id='referencia' onChange={registro} placeholder='Nombre de referencia para tu billete' autofocus autoComplete='off/'/>
      <button className='btn btn-login' onClick={login} >Login</button>
    </section>
    </>
    
  )
}
