const initializaztion=()=>{
    let todolist = JSON.parse(localStorage.getItem('todo-list'))
    if( todolist === null ){
        let todolist=[]
        return todolist
    }
    return todolist
}
export {initializaztion}