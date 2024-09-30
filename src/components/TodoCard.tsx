//import axios from "axios";
import {TodoElement, TodoList} from "../types/todoElement";
//import DeleteTodo from "./DeleteTodo";
//import EditTodo from "./EditTodo";
import "./TodoCard.css"
import {useNavigate} from "react-router-dom"
//import DeleteTodo from "./DeleteTodo";

type CardProps = {
    todoElement: TodoElement;
    setter: (newList: TodoList) => void
}

export default function TodoCard(props:CardProps) {
    const entry:TodoElement = props.todoElement;
    const navigate = useNavigate()
    return (
        <div className={entry.status}>
            <h2> {entry.description}</h2>
            <button type="button" onClick={() => navigate("todo/edit/" + entry.id)}> Edit </button>
            <button type="button" onClick={() => navigate("todo/delete/" + entry.id)}> Delete </button>
        </div>
        )
}

/*     const edit = () => <EditTodo setter={props.setter} todoElement={props.todoElement}/>
    const del = () => <DeleteTodo todoElement={props.todoElement}/>
*/