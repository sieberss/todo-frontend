import { TodoElement, TodoList } from "../types/todoElement"
type DetailProps= {
    todoElement: TodoElement;
    setter: (newList: TodoList) => void
    isNew:boolean
}

export default function Details (props:DetailProps){
    const todoElement:TodoElement = props.todoElement;
    return(
        <>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>Description:</label>
                        </td>
                        <td>
                            <input type={"text"} name="description" value={todoElement.description}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <label>Status</label>
                        </td>
                        <td>
                            <select name={"status"}>
                                <option label="Not started yet" value={"OPEN"}></option>
                                <option label="Work in Progress" value={"IN_PROGRESS"}></option>
                                <option label="Finished" value={"DONE"}></option>
                                selectedValue={todoElement.status}
                            </select>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )

}