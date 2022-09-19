import React from 'react'
import { TodoItem } from './TodoItem';
import { Link } from "react-router-dom";

export const Todos = (props) => {

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className='col-md-8 offset-md-2' style={{ minHeight: "483px", marginTop: "80px" }}>
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <h2 className=' text-center'><b>Your Tasks:</b></h2>
                                <Link to='/add-task' className='btn btn-outline-primary px-4 pt-2'> Add </Link>
                            </div>
                        </div>
                        {props.todos.length === 0 ? "You don't have any task!" :
                            props.todos.map((todo) => {
                                return <TodoItem todo={todo} key={todo.sno} onDelete={() => { props.onDelete(todo) }} />
                            })
                        }
                    </div>
                </div>
                <div className='text-end'>
                    <button className='btn btn-info mb-3' onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}><i class="fa-solid fa-arrow-up-long"></i></button>
                </div>
            </div>
        </>
    )
}

// export default Todos;