export type TodoElement = {
    id: string,
    description: string,
    status: Status
}
export type TodoList = TodoElement[]

export type Status = "OPEN" | "IN_PROGRESS" | "DONE"