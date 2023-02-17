import { FC } from "react"
import { useContext } from "react"
import { ContextTodo } from "../../utils/Todos/ContextTodo"
import { ListDataType } from "../../utils/Todos/ContextTodo"
import { UPDATE_TASK } from "../../utils/Todos/handleTasks"

interface Props {
    completed: ListDataType,
    uuid: string,
    text: string,
    task_container: React.MutableRefObject<HTMLDivElement>
}

const Text: FC<Props> = ({ completed, uuid, text, task_container }) => {
    const { setCurrentTask } = useContext(ContextTodo)

    return (
        <li
            className={`${completed === ListDataType.Completed && 'line-through text-gray-500'} text-xl md:text-4xl`}
            onClick={() => {
                task_container.current.style.transform = 'scale(0)'
                task_container.current.style.textDecoration = 'line-through'
                setTimeout(() => {
                    const NEW_TASKS = UPDATE_TASK(uuid)
                    setCurrentTask(NEW_TASKS.tasks)
                }, 700)
            }}
        >
            {text}
        </li>
    )
}

export default Text