import { useState } from 'react'

import './App.css'
import MyComponent from './component/MyComponent';

function App() {
 
  const name = 'ali';

  return (
    <>
    <h1>my name {name}</h1>
    <MyComponent name={name}/>
    <MyComponent name={name}/>
    <MyComponent name={name}/>
    </>
  )
}

export default App
