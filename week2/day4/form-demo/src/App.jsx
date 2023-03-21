import { useState } from 'react'
import './App.css';
// import LoginForm from './components/LoginForm/LoginForm';
import Form from './components/Form/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
      {/* <LoginForm /> */}
    </div>
  )
}

export default App
