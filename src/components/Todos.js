import React from 'react'
import TodoItem from './TodoItem'
import {todostyle} from '../styles/todos'

export default function Todos(props) {
    
    return (
        <div className="container my-4" style={todostyle}>
            <hr/>
            <h3 className="text-center my-3">TodoList</h3>
            {
                props.todolist.map((todo)=>{
                    return <TodoItem delete={props.delete.bind(todo)} key={todo.no} todo={todo}/>
                })
            }
            
        </div>
    )
}
