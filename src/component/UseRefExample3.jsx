import {useState}from 'react'
import Todos from './Todos'
// * Memory Leak Firebase Fetch scenario
// * use Todos component to recreate scenario




const UseRefExample3 = () => {
    const [showTodo, setShowTodo]=useState(true)

  return (
    <div>{showTodo && <Todos/>}
    <button onClick ={() => setShowTodo(!showTodo)}className="btn btn-primary">Toggle Todo</button>
    </div>
  )
}

export default UseRefExample3