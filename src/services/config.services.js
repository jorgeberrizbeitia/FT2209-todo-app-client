// la configuracion inicial de TODAS las llamadas al Backend

import axios from "axios"

// crear el archivo base de servicios
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})



export default service