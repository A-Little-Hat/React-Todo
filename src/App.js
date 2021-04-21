//library import
import React,{useState,useEffect} from 'react'

//component import
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

//function import
import {initializaztion} from './localStorage/localStore'

//style import
import {hrstyle} from './styles/hr'


function App() {
  //initialization
  let initialTodo=initializaztion()
  const [todos, settodos] = useState (initialTodo)
  //delete todo
  const deletetodo =(todo)=>{
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
    console.log("deleted",todo)
    //delete locally
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }
  //add todo
  const addTodo = (additem)=>{
    settodos([...todos,additem])
    console.log(additem)
  }
  useEffect(() => {
    return () => {
      localStorage.setItem("todo-list", JSON.stringify(todos));  
    }
  },[todos])
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
