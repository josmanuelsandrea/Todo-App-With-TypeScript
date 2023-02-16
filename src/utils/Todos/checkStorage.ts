
import { ListDataType } from "./ContextTodo"

export interface TaskType {
    name: string,
    status: ListDataType
    uuid: string
}

export interface TODO_TASKS_TYPE {
    tasks: TaskType[]
}

export const LOCAL_STORAGE_ITEM_NAME: string = 'TODO_TASKS_V1'

/** This function checks if item in localstorage exists, if it does, then it returns the current value, if it doesn't, creates the item with an empty array and returns it */
export const checkStorage = (): TODO_TASKS_TYPE => {
    const TASK_DATA = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME)

    if (TASK_DATA){
        return JSON.parse(TASK_DATA)
    } else {
        localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify({ tasks: [] } as TODO_TASKS_TYPE))
        return {
            tasks: []
        }
    }
}

