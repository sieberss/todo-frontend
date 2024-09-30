import {TodoElement, TodoList} from "../types/todoElement";
import TodoCard from "./TodoCard";

type ListProps = {
    todoList: TodoElement[],
    setter: (newList: TodoList) => void;
}
export default function ShowAll(props:ListProps) {
const cards = props.todoList.map((entry => (<TodoCard key={entry.id} todoElement={entry} setter={props.setter}/>)))
    return (
        <>
            {cards}
        </>
    )
}

//<button type="button" onClick={navigate("/edit/" + entry.id)}> Edit </button>
//<button type="button" onClick={navigate("/delete/" + entry.id)}> Delete </button>
