import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Todos } from './pages/Todos';
import { About } from './pages/About';
import { AddTodo } from './pages/AddTodo';
import { Home } from './pages/Home';
import Swal from "sweetalert2";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete = (todo) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this task!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        setTodos(todos.filter((e) => {
          return e !== todo;
        }))
      }
    })


    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodos([...todos, myTodo])
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/list" element={<Todos todos={todos} onDelete={onDelete} addTodo={addTodo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-task" element={<AddTodo addTodo={addTodo} />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
