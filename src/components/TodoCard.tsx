import "./TodoCard.css"

export default function TodoCard(props) {
    return (
        <>
            <h2 className={props.todoElement.status}> {props.todoElement.description}
            <button type={"button"}>Edit</button>
            <button type={"button"}>Delete</button>
            </h2>
        </>
    )
}
