//import Details from "./Details";
import { TodoList} from "../types/todoElement";

type EditTodoProps = {
    setter: (newlist: TodoList) => void
}

export default function EditTodo(props:EditTodoProps){
    return(
        <>

        </>
    )
}

// <Details todoElement={todoElement} setter={props.setter} isNew={false}/>