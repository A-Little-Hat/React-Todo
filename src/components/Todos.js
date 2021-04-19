import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {
                props.todolist.map((todo)=>{
                    return <TodoItem delete={props.delete.bind(todo.no)} key={todo.no} todo={todo}/>
                })
            }
            
        </div>
    )
}
