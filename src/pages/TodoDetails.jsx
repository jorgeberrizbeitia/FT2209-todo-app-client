import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom"

function TodoDetails() {

  // 0.5. buscar el id por parametro dinamico
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
    }
  }


  // 4. clausula de guardia de buscando
  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  // 5. renderizar

  return (
    <div>
      
      <h4>Detalles del ToDo</h4>

      <div>

        <h5>{details.title}</h5>
        <p>{details.description}</p>
        <p>Es urgente: {details.isUrgent === true ? "YAAAAS" : "nah"}</p>

      </div>

    </div>
  )
}

export default TodoDetails