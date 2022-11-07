import { createContext, useState } from "react";

const ThemeContext = createContext()
// lo de arriba es un componente creado por React

function ThemeWrapper(props) {

  // creamos todos los estados y funciones que queremos pasar por contexto
  const [ darkMode, setDarkMode ] = useState(false)

  let str = "patata"

  const darkTheme = {
    backgroundColor: "black",
    color: "darkGray"
  }

  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }

  const darkThemeBtn = {
    backgroundColor: "red"
  }

  const lightThemeBtn = {
    backgroundColor: "lightblue"
  }

  const cambiarTemaBtn = () => {
    return darkMode === true ? darkThemeBtn : lightThemeBtn
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const cambiarTema = () => {
    return darkMode === true ? darkTheme : lightTheme
  }

  const passedContext = {
    cambiarTemaBtn,
    toggleTheme,
    cambiarTema,
    str
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}


export {
  ThemeWrapper, 
  ThemeContext
}
