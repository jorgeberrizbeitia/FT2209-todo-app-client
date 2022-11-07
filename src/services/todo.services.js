// todas las funciones que llaman al BE para CRUD de ToDos.

import service from "./config.services";

// http://localhost:5005/api viene como URL base del objeto "service"
const getAllTodosService = () => {
  return service.get("/todos")
}

// aqui haremos otras funciones de CRUD

// export default getAllTodosService
export {
  getAllTodosService // exporta este y otros elementos que definamos abajo
}