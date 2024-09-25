import {useEffect, useState } from 'react'
import './App.css'
import {TodoElement, Status} from './types/todoElement.ts'
import axios from 'axios';
import SingleTodo from './components/SingleTodo.tsx';
import Navbar from './components/Navbar.tsx';
import { Route, Routes } from 'react-router-dom';
import ShowAll from './components/ShowAll.tsx';
import AddTodo from './components/AddTodo.tsx';
import ShowByStatus from './components/ShowByStatus.tsx';
import EditTodo from './components/EditTodo.tsx';
import DeleteTodo from './components/DeleteTodo.tsx';


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
            <Route path="/" element={<ShowAll todoList={todoList}/>}/>
            <Route path="/add" element={<AddTodo/>}/>
            <Route path={"/notstarted"} element={<ShowByStatus todoList={todoList} status={"OPEN"}/>}/>
            <Route path={"/inprogress"} element={<ShowByStatus todoList={todoList} status={"IN_PROGRESS"}/>}/>
            <Route path={"/done"} element={<ShowByStatus todoList={todoList} status={"DONE"}/>}/>
            <Route path={"/edit/:id"} element={<EditTodo/>}/>
            <Route path={"/delete/:id"} element={<DeleteTodo/>}/>
        </Routes>
    </>
  )
}

export default App
