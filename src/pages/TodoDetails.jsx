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

  // 2. buscar la informacion del servidor/bd con el useEffect
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/todos/${todoId}`) // ????
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  // 3. actualizar el estado con la data

  // 4. clausula de guardia de buscando

  // 5. renderizar

  return (
    <div>TodoDetails</div>
  )
}

export default TodoDetails