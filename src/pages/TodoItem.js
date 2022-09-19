import React from 'react'

export const TodoItem = (props) => {
    let headerStyle = {
        backgroundColor: "#fced79"
    }
    // let index = props.todo[this];
    // console.log(props.todos.indexOf(props.todo))
    return (
        <div className="card my-3 position-relative">
            <div className="card-header" style={headerStyle}>
                <h5>{props.todo.title}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{props.todo.description}</p>
                <button  className="btn btn-danger" onClick={props.onDelete}><i class="fa-solid fa-trash-can"></i> Delete</button>
            </div>
        </div>
    )
}
// export default TodoItem;
