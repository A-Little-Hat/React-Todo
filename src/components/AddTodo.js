import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const add = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be blank.")
        }
        else{let id = [props.todolist.length];
        console.log(id)
        let additem= {no:id,title:title,desc:desc}
        props.addTodo(additem)
        setTitle("")
        setDesc("")
        }
    }
    return (
        <div className="container" >
            <form onSubmit={add}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => {
                        setDesc(e.target.value)
                    }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
