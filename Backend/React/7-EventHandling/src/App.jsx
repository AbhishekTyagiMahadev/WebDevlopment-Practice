import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Abhishek Tyagi')
  const [form, setForm] = useState({ email:'xyz', phone:1234})


  const onClick = () =>{
    alert("Button was clicked")
  }
  const onMouseOver = ()=>{
    alert('Cursor on Button 2')
  } 
  const onChange = (e) =>{
    setName(e.target.value)
  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  return (
    <>
      <div><button onClick={onClick}>Click Me1</button></div>
      <div><button onMouseOver={onMouseOver}>Click Me2</button></div>
      <input type="text" value={name} onChange={onChange} />
      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={handleChange} /> 
    </>
  )
}

export default App
