import { TodoElement } from "./todoElement"

export type  ElementProps = {
    todoElement:TodoElement
}
export type ElementManipulationProps = {
    todoElement: TodoElement,
    setter: () => TodoElement[]
}

export type ListProps = {
    todoList:TodoElement[]
}

export type ListManipulationProps = {
    todoList: TodoElement[],
    setter: (todoList:TodoElement[]) => TodoElement[]
}