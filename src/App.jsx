import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import StatefulForm from './components/Statefulform/StatefulForm'
import RefForm from './components/RefForm/RefForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <Form></Form> */}
      {/* <StatefulForm></StatefulForm> */}
      <RefForm></RefForm>
    </>
  )
}

export default App
