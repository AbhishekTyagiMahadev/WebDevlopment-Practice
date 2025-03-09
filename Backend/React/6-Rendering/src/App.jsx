import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])
  const Todo = ({ todo }) => {
    return (<>
      <div>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
    </>)
  }
  return (
    <>
      <div>
        {/* <button onClick={() => setshowBtn(!showBtn)}>click here</button> */}
      </div>
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title}>
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}
      <div>
        {/* {showBtn ? <button>True</button> : <button>False</button>} */}
        {/* {showBtn && <button>another btn</button>} */}
      </div>
    </>
  )
}

export default App
