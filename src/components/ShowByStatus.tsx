import TodoCard from "./TodoCard";

export  default  function ShowByStatus({todoList, status}){
    return (
        <>
            {todoList.filter(entry => entry.status == status)
                .map(entry => ( <TodoCard key={entry.id} todoElement={entry}> </TodoCard>) )}
        </>
    )
}