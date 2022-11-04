import React from 'react'
import { useState } from 'react'

function AddForm() {

  const [ titleInput, setTitleInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ isUrgentInput, setIsUrgentInput ] = useState(false)

  const handleTitleChange = (event) => setTitleInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleIsUrgentChange = (event) => setIsUrgentInput(event.target.checked)

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
        <button>Agregar</button>
      </form>

    </div>
  )
}

export default AddForm