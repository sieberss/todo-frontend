import { TodoElement } from "../types/todoElement";
import TodoCard from "./TodoCard";
type ByStatusProps={
    todoList:TodoElement[];
    status:string
}
export  default  function ShowByStatus(props: Readonly<ByStatusProps>){
    const cards = props.todoList.filter(entry => entry.status == props.status)
        .map(entry => ( <TodoCard key={entry.id} todoElement={entry}/>) )
    return(
        <>
             {cards}
        </>
    )
}