import {useEffect, useState } from 'react'
import './App.css'
import {TodoElement} from './types/todoElement.ts'
import axios from 'axios';
import Navbar from './components/Navbar.tsx';
import { Route, Routes } from 'react-router-dom';
import ShowAll from './components/ShowAll.tsx';
import AddTodo from './components/AddTodo.tsx';
import ShowByStatus from './components/ShowByStatus.tsx';
import DeleteTodo from './components/DeleteTodo.tsx';
import EditTodo from './components/EditTodo.tsx';


function App() {
    const [todoList, setTodoList] = useState<TodoElement[]>([])
    const fetchData = () => {
        axios.get('/api/todo')
            .then(response => {setTodoList(response.data)})
            .catch(error => console.error("Error fetching data:", error))
    };

    useEffect(() => fetchData(), [])

  return (
    <>
        <h1>Stefan's Genious ToDo Manager</h1>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<ShowAll todoList={todoList} setter={setTodoList}/>}/>
            <Route path="/add" element={<AddTodo setter={setTodoList}/>}/>
            <Route path={"/notstarted"} element={<ShowByStatus todoList={todoList} status={"OPEN"}/>}/>
            <Route path={"/inprogress"} element={<ShowByStatus todoList={todoList} status={"IN_PROGRESS"}/>}/>
            <Route path={"/done"} element={<ShowByStatus todoList={todoList} status={"DONE"}/>}/>
            <Route path={"/todo/delete/:id"} element={<DeleteTodo setter={setTodoList}/> }/>
            <Route path={"/todo/edit/:id"} element={<EditTodo setter={setTodoList}/>}/>
        </Routes>
    </>
  )
}

export default App
