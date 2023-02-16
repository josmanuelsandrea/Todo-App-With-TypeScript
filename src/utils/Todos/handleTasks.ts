import { TaskType, checkStorage, LOCAL_STORAGE_ITEM_NAME, TODO_TASKS_TYPE } from "./checkStorage"
import { ListDataType } from "./ContextTodo"

/**
   * Add a new TASK
   *
   * @param task - A Task that follows TaskType
   * @returns the current tasks
*/
export const ADD_TASK = (task: TaskType) => {
    const CURRENT_TASKS = checkStorage()

    CURRENT_TASKS.tasks.push(task)

    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(CURRENT_TASKS))

    return CURRENT_TASKS
}

/**
   * Updates given task
   *
   * @param task_id - Unique ID of an existing TASK
   * @returns the updated object
*/
export const UPDATE_TASK = (task_id: string) => {
    const CURRENT_TASKS = checkStorage()

    const INDEX_TASK = CURRENT_TASKS.tasks.findIndex(item => item.uuid === task_id) // Get the index of the task with the given UUID
    const SELECTED_TASK = CURRENT_TASKS.tasks.filter(item => item.uuid === task_id)[0] // Get the object of the task with the given UUID

    if (INDEX_TASK > -1){ // if there's index
        CURRENT_TASKS.tasks.splice(INDEX_TASK, 1) // remove that TASK from the array
        let UPDATED_TASK = {...SELECTED_TASK, status: SELECTED_TASK.status === ListDataType.Completed ? ListDataType.Uncompleted : ListDataType.Completed } as TaskType // Set the opposite of completed or uncompleted
        CURRENT_TASKS.tasks.push(UPDATED_TASK) // add the TASK to the array.
    }

    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(CURRENT_TASKS)) // Update the localstorage with the new TaskList
    return CURRENT_TASKS
}

/**
   * Deletes given task
   *
   * @param task_id - Unique ID of an existing TASK
   * @returns the updated object
*/
export const DELETE_TASK = (task_id: string) => {
    const CURRENT_TASKS = checkStorage()
    const INDEX_TASK = CURRENT_TASKS.tasks.findIndex(item => item.uuid === task_id) // Get the index of the task with the given UUID // Get the object of the task with the given UUID

    if (INDEX_TASK > -1){
        CURRENT_TASKS.tasks.splice(INDEX_TASK, 1)
    }

    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(CURRENT_TASKS))
    return CURRENT_TASKS
}

export const DELETE_ALL_TASKS = () => {
    const CURRENT_TASKS: TODO_TASKS_TYPE = { tasks: [] }
    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(CURRENT_TASKS))
    return CURRENT_TASKS
}