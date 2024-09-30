import {useParams} from "react-router-dom";
import { TodoElement, TodoList } from "../types/todoElement";
//import { ElementManipulationProps } from "../types/propsTypes";
import axios from "axios";
import {useEffect, useState } from "react";

type DeleteProps = {
    setter: (newList:TodoList) => void
}

export default function DeleteTodo (props:DeleteProps) {

    const [todoElement, setTodoElement] = useState<TodoElement>()


    const params = useParams();
    const id = params.id
    useEffect(() => {
        axios.get('/api/todo/' + id)
            .then(response => setTodoElement(response.data))
    }, [id])

    function deleteTodoRemote() {
        axios.delete('/api/todo/' + id)
            .then(response => props.setter(response.data))
            .catch(error => {
                console.error("Error when deleting element with id " + id, error);
            })
    }

    return todoElement ? (
        <>
            <h2>Do you really want to delete this ToDo?</h2>
            <p>Description: {todoElement.description}</p>
            <p>Status: {todoElement.status}</p>
            <button onClick={deleteTodoRemote}>OK</button>
        </>
    ) : (<h2>Loading</h2>)


}