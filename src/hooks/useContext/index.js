import React,{useContext} from 'react'
import {UseContext,ThemeContext} from '../../App'
export default function ContextHook() {

  const user = useContext(UseContext)
  const theme =useContext(ThemeContext)
  console.log(user)
  return (
    <div>
      
    </div>
  )
}
