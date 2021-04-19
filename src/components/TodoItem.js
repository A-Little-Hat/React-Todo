import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="my-3">
           <h3>name: {props.todo.title}</h3>
           <h5>name: {props.todo.no}</h5>
           <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    );
}

export default TodoItem;
