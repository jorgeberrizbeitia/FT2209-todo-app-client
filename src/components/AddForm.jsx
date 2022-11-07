import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { createTodoService } from '../services/todo.services'

function AddForm(props) {

  const [ titleInput, setTitleInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ isUrgentInput, setIsUrgentInput ] = useState(false)

  const handleTitleChange = (event) => setTitleInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleIsUrgentChange = (event) => setIsUrgentInput(event.target.checked)

  const handleSubmit = async (event) => {

    event.preventDefault()

    const newTodo = {
      title: titleInput,
      description: descriptionInput,
      isUrgent: isUrgentInput
    }

    // nos contactamos con el servidor para que cree el ToDo y nos de respuesta
    try {
      
      //                                                         ! el 2do argumento del axios.post es la data que se pasa en el req.body
      // const response = await axios.post("http://localhost:5005/api/todos", newTodo)
      await createTodoService(newTodo)
      // si JS llega a este punto es porque el ToDo se ha creado correctamente
      // tenemos que indicarle a React, que la lista se ha actualizado
      // manualmente actualizaremos la lista desde el server
      props.actualizarLista()
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      
      <form>

        <label htmlFor="title">Titulo:</label>
        <input value={titleInput} type="text" name="title" onChange={handleTitleChange}/>
        <br />
        <label htmlFor="description">Descripción:</label>
        <input value={descriptionInput} type="text" name="description" onChange={handleDescriptionChange}/>
        <br />
        <label htmlFor="isUrgent">Es Urgente:</label>
        <input checked={isUrgentInput} type="checkbox" name="isUrgent" onChange={handleIsUrgentChange}/>
        <br />
        <button onClick={handleSubmit}>Agregar</button>
      </form>

    </div>
  )
}

export default AddForm