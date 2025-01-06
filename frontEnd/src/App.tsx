import { useState } from 'react'

import './App.css'
import MyComponent from './component/MyComponent';

function App() {
  console.log("from najib")
  const name = 'ali';

  return (
    <>
      <h1>my name {name}</h1>
      <MyComponent name={name} />
      <MyComponent name={name} />
      <MyComponent name={name} />
    </>
  )
}

export default App
