import Task from "./Task"
import { ContextTodo } from '../utils/Todos/ContextTodo'
import { useContext } from "react"
import { InfinitySpin } from "react-loader-spinner"
import { PlusCircleIcon } from "@heroicons/react/24/solid"

const List = () => {
    const { active_list, loading, currentTasks } = useContext(ContextTodo)

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
            <div className="absolute right-5 bottom-5 w-[4em]">
                <PlusCircleIcon className="text-blue-900"/>
            </div>
        </div>
    )
}

export default List