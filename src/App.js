import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import React,{useState} from 'react'

function App() {
  const deletetodo =(todo)=>{
    console.log("deleted",todo)
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (additem)=>{
    console.log(additem)
    settodos([...todos,additem])
  }
  const hrstyle={
    weight:"10px",
    color:"blue"
  }
  const [todos, settodos] = useState ([])
  return (
    <div className="container">
      <Header/>
      <AddTodo todolist={todos} addTodo={addTodo} />
      <Todos todolist={todos} delete={deletetodo} />
      <hr style={hrstyle} />
      <Footer/>
    </div>
  );
}

export default App;
