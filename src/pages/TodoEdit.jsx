import React from 'react'
import { useState } from 'react'

function TodoEdit() {

  const [ titleInput, setTitleInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ isUrgentInput, setIsUrgentInput ] = useState(false)

  const titleChange = (event) => setTitleInput(event.target.value)
  const descriptionChange = (event) => setDescriptionInput(event.target.value)
  const isUrgentChange = (event) => setIsUrgentInput(event.target.checked)

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
        <input type="checkbox" name="isUrgent" value={isUrgentInput} onChange={isUrgentChange}/>
        <br />
        <button>Editar ToDo</button>
      </form>

    </div>
  )
}

export default TodoEdit