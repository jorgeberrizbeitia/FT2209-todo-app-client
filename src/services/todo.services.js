// todas las funciones que llaman al BE para CRUD de ToDos.

import service from "./config.services";

// http://localhost:5005/api viene como URL base del objeto "service"
const getAllTodosService = () => {
  return service.get("/todos")
}

// aqui haremos otras funciones de CRUD
const createTodoService = (newTodo) => {
  return service.post("/todos", newTodo)
}

const getTodoDetailsService = (todoId) => {
  return service.get(`/todos/${todoId}`)
}

const deleteTodoService = (todoId) => {
  return service.delete(`/todos/${todoId}`)
}

const updateTodoService = (todoId, todoChanges) => {
  return service.patch(`/todos/${todoId}`, todoChanges)
}

// export default getAllTodosService
export {
  getAllTodosService, // exporta este y otros elementos que definamos abajo
  createTodoService,
  getTodoDetailsService,
  deleteTodoService,
  updateTodoService
}