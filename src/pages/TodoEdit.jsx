import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MapEdit from '../components/MapEdit'
import { getTodoDetailsService, updateTodoService } from '../services/todo.services'

function TodoEdit() {

  const { todoId } = useParams()
  const navigate = useNavigate()

  const [ titleInput, setTitleInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ isUrgentInput, setIsUrgentInput ] = useState(false)
  const [ coordinates, setCoordinates ] = useState([0, 0])
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await getTodoDetailsService(todoId)
      console.log(response)
  
      // que debo hacer para actualizar los campos con response?
      setTitleInput(response.data.title)
      setDescriptionInput(response.data.description)
      setIsUrgentInput(response.data.isUrgent)
      setCoordinates(response.data.coordinates)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const titleChange = (event) => setTitleInput(event.target.value)
  const descriptionChange = (event) => setDescriptionInput(event.target.value)
  const isUrgentChange = (event) => setIsUrgentInput(event.target.checked)

  const handleUpdate = async (event) => {
    event.preventDefault()
    try {
      
      // recopilamos los valor a actualizar
      const updatedTodo = {
        title: titleInput,
        description: descriptionInput,
        isUrgent: isUrgentInput,
        coordinates: coordinates
      }
      // llamamos al servicio de update pasando el Id y la data a actualizar
      await updateTodoService(todoId, updatedTodo)

      // redireccionar
      navigate("/todos")

    } catch (error) {
      navigate("/error")
    }
  }

  if (isFetching === true) {
    return <h3>...loading</h3>
  }

  return (
    <div>
      
      <h3>Formulario Editar</h3>

      <form>

        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" value={titleInput} onChange={titleChange}/>
        <br />
        <label htmlFor="description">Descripción</label>
        <input type="text" name="description" value={descriptionInput} onChange={descriptionChange}/>
        <br />
        <label htmlFor="isUrgent">Es Urgente</label>
        <input type="checkbox" name="isUrgent" checked={isUrgentInput} onChange={isUrgentChange}/>
        <br />
        <button onClick={handleUpdate}>Editar ToDo</button>
      </form>

      <MapEdit coordinates={coordinates} setCoordinates={setCoordinates}/>

    </div>
  )
}

export default TodoEdit