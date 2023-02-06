import Task from "./Task"
import { ContextTodo } from '../utils/ContextTodo'
import { useContext } from "react"
import { InfinitySpin } from "react-loader-spinner"

const List = () => {
    const { active_list, loading, currentTasks } = useContext(ContextTodo)

    return (
        <div className="flex flex-col w-full justify-center flex-auto">
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
        </div>
    )
}

export default List