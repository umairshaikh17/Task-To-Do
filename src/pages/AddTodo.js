import React, { useState } from 'react'
import Swal from "sweetalert2";
import  { useNavigate } from 'react-router-dom'

export const AddTodo = (props) => {
    let headerStyle = {
        backgroundColor: "#fced79",
    }
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            Swal.fire({
                title: "Error",
                text: "Title or Description cannot be blank.",
                icon: "error",
                confirmButtonText: "OK",
              });
        } else {
            props.addTodo(title, description)
            setTitle("");
            setDescription("");
            Swal.fire({
                title: "Success",
                text: "Task added successfully",
                icon: "success",
                confirmButtonText: "OK",
              });
            navigate('/list');
        }
    }
    return (
        <div className="col-md-6 offset-md-3" style={{minHeight: "461px"}}>
            <div className="card" style={{ marginTop: "156px" }}>
                <div className="card-header text-center" style={headerStyle}>
                    <h5><b>Add New Task</b></h5>
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title<span style={{color:'red'}}>*</span></label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description<span style={{color:'red'}}>*</span></label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description" />
                        </div>
                        <div className="col-2 mx-auto">
                            <button type="submit" className="btn btn-success">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
