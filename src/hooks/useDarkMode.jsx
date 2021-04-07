import React from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
   const[light, setLight] = useLocalStorage("darkMode")

   return [light, setLight];
}

export default useDarkMode;