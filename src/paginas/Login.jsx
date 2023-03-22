import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

export default function Login() {
  const {loguearse}= useContext(Contexto)
  const navegacion = useNavigate();
  const login =()=>{
    navegacion('/',{replace:true})
    loguearse('am')
  }

  return (
    <>
    <h1>Login</h1>
    <button onClick={login} >Login</button>
    </>
    
  )
}
