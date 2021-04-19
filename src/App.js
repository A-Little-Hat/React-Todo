import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import React,{useState} from 'react'

function App() {
  const deletetodo =(todo)=>{
    // let index=todos.indexOf(todo)
    console.log("deleted",todo)
    // todos.splice(index,1)
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, settodos] = useState ([
    {
      no:0,
      title:"eat"
    },
    {
      no:1,
      title:"sleep"
    },
    {
      no:2,
      title:"code"
    }
  ])
  return (
    <div className="App">
      <Header/>
      <Todos todolist={todos} delete={deletetodo} />
      <Footer/>
    </div>
  );
}

export default App;
