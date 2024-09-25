import TodoCard from "./TodoCard";
import {useNavigate} from "react-router-dom"

export default function ShowAll({todoList}) {
    const navigate = useNavigate();

    return (
        <>
            {todoList.map(entry => (<TodoCard key={entry.id} todoElement={entry}> </TodoCard>
            ))}
        </>
    )
}

//<button type="button" onClick={navigate("/edit/" + entry.id)}> Edit </button>
//<button type="button" onClick={navigate("/delete/" + entry.id)}> Delete </button>
