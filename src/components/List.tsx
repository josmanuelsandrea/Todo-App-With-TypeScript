import Task from "./Task"
import { ContextTodo } from '../utils/Todos/ContextTodo'
import { useContext } from "react"
import { InfinitySpin } from "react-loader-spinner"
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/solid"
import { StatusContext } from "../utils/Status/StatusTodo"
import { DELETE_ALL_TASKS } from "../utils/Todos/handleTasks"
import Swal from "sweetalert2"

const List = () => {
    const { active_list, loading, currentTasks, setCurrentTask } = useContext(ContextTodo)
    const { toggleModalStatus } = useContext(StatusContext)
    const DELETE_ALL_FUNCTION = () => {
        Swal.fire({
            title: 'Are you sure you wanna delete all the tasks?',
            text: "There's no way back!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(30 58 138)',
            cancelButtonColor: 'rgb(185 28 28)',
            confirmButtonText: 'Delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                const TASKS = DELETE_ALL_TASKS()
                setCurrentTask(TASKS.tasks)
            }
        })
    }

    return (
        <div className="flex flex-col w-full justify-center items-center flex-auto relative">
            <ul className="flex justify-center flex-col items-center gap-5">
                <div>
                    {loading && <InfinitySpin color="#1E3A8A"/>}
                    {!loading && currentTasks.map(task => {
                        if (task.completed === active_list) {
                            return <Task text={task.name} completed={task.completed} key={task.uuid} uuid={task.uuid} />
                        }

                        return null
                    })}
                </div>
            </ul>
            <div className="absolute right-5 bottom-5 w-[4em] flex flex-col">
                <XCircleIcon className="text-red-500 drop-shadow-sm" onClick={DELETE_ALL_FUNCTION}/>
                <PlusCircleIcon className="text-blue-900 drop-shadow-sm" onClick={toggleModalStatus}/>
            </div>
        </div>
    )
}

export default List