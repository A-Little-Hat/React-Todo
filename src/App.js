//library import
import React,{useState,useEffect} from 'react'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'

//component import
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import About from './components/About'

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
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
      <AddTodo todolist={todos} addTodo={addTodo} />
      <Todos todolist={todos} delete={deletetodo} />
      <hr style={hrstyle} />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
