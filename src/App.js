import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {
  const deletetodo =(number)=>{
    console.log("deleted",number)
    todos.splice(number,1)
  }
  let todos = [
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
  ]
  return (
    <div className="App">
      <Header/>
      <Todos todolist={todos} delete={deletetodo} />
      <Footer/>
    </div>
  );
}

export default App;
