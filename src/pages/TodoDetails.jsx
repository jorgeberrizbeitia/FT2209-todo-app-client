import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"

function TodoDetails() {

  // configuraciones de hooks 
  const navigate = useNavigate() // .TODOS LOS HOOKS SE INVOCAN
  // navigate es el elemento que nos permite redireccionar al usuario en react-router-dom

  // buscar el id por parametro dinamico
  const { todoId } = useParams()

  // 1. crear el estado donde estaran los detalles
  const [ details, setDetails ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  // 2. buscar la informacion del servidor/bd con el useEffect
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/todos/${todoId}`) // ????
      console.log(response)
      // 3. actualizar el estado con la data
      setDetails(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }


  // 4. clausula de guardia de buscando
  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  const handleDelete = async () => {

    try {

      // 1. contactar al Backend para borrar un ToDo por su id
      await axios.delete(`http://localhost:5005/api/todos/${todoId}`)
      console.log("elemento borrado")

      // 2. redireccionar al usuario a "/todos"
      navigate("/todos")
      
    } catch (error) {
      console.log(error)
      // cada vez que tenemos un catch(error), es decir, hay un error de desarrollo
      // entonces podemos redireccionar a una pagina de error 500
      navigate("/error")
      // de ahora en adelante, los catch consideran esto y reenvian a "/error"
    }

  }

  // 5. renderizar

  return (
    <div>
      
      <h4>Detalles del ToDo</h4>

      <div>

        <h5>{details.title}</h5>
        <p>{details.description}</p>
        <p>Es urgente: {details.isUrgent === true ? "YAAAAS" : "nah"}</p>

        <button onClick={handleDelete}>Borrar</button>

      </div>

    </div>
  )
}

export default TodoDetails