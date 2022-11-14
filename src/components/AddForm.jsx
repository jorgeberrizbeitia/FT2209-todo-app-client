import axios from 'axios'
import React from 'react'
import { useState, useContext } from 'react'
import { createTodoService } from '../services/todo.services'
import { ThemeContext } from "../context/theme.context"
import { uploadImageService } from '../services/upload.services'

function AddForm(props) {

  const { cambiarTemaBtn } = useContext(ThemeContext)

  const [ titleInput, setTitleInput ] = useState("")
  const [ descriptionInput, setDescriptionInput ] = useState("")
  const [ isUrgentInput, setIsUrgentInput ] = useState(false)
  // const [ coordinates, setCoordinates ] = useState([[50, 10]])
  const [ imageURL, setImageURL ] = useState("")
  const [ isUploadingImage, setIsUploadingImage ] = useState(false)

  const handleTitleChange = (event) => setTitleInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleIsUrgentChange = (event) => setIsUrgentInput(event.target.checked)

  const handleSubmit = async (event) => {

    event.preventDefault()

    const newTodo = {
      title: titleInput,
      description: descriptionInput,
      isUrgent: isUrgentInput,
      image: imageURL
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

  const handleUploadImage = async (event) => {
    setIsUploadingImage(true)
    console.log(event.target.files[0])

    // tengo que insertar la imagen en un objeto de JS capaz de transmitir archivos FE - BE
    const formularioDeEnvio = new FormData()
    formularioDeEnvio.append("image", event.target.files[0])
    // "image" debe ser el mismo nombre de la ejecución del middleware uploader.single("image")
    
    try {
      // contactar a cloudinary (por el BE, service) para subir la imagen y recibir el URL
      const response = await uploadImageService(formularioDeEnvio)
      // subir el url al estado para la creacion del ToDo
      console.log(response.data.image)
      setImageURL(response.data.image)
      setIsUploadingImage(false)
    } catch (error) {
      // navigate("/error")
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
        <label htmlFor="image">Imagen</label>
        <input type="file" name="image" onChange={handleUploadImage}/>
        <br />
        {isUploadingImage === true && <p>...subiendo imagen</p>}
        {imageURL !== "" ? <img src={imageURL} atl="image" width={200}/> : <p>Seleccione imagen</p>}
        <br />
        <button onClick={handleSubmit} style={cambiarTemaBtn()}>Agregar</button>
      </form>

    </div>
  )
}

export default AddForm