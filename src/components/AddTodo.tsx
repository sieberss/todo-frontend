import {TodoElement, TodoList} from "../types/todoElement"
import Details from "./Details"

type AddProps = {
    setter: (newList: TodoList) => void
}
export default function AddTodo(props:AddProps){
    const newElement:TodoElement =
        {id: "1",
        description : "",
        status :"OPEN"
    }

    return(

    <>

        </>
    )
}

//<Details> todoElement={newElement}, setter={props.setter}, isNew={true}</Details>