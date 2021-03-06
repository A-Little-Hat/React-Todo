import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="my-3">
           <h3>Name: {props.todo.title}</h3>
           <h5>Desc: {props.todo.desc}</h5>
           <button className="btn btn-sm btn-danger" onClick={props.delete.bind(this,props.todo)} >Delete</button>
        </div>
    );
}

export default TodoItem;
