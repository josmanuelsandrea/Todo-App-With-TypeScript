import { FC, useContext } from "react"
import { ContextTodo } from "../../utils/Todos/ContextTodo"
import { TrashIcon } from "@heroicons/react/24/solid"
import Swal from "sweetalert2"
import { DELETE_TASK } from "../../utils/Todos/handleTasks"

interface Props {
    uuid: string,
    task_container: React.MutableRefObject<HTMLDivElement>
}

const DeleteButton: FC<Props> = ({ uuid, task_container }) => {
    const { setCurrentTask } = useContext(ContextTodo)

    const DELETE_FUNCTION = () => {
        Swal.fire({
            title: 'Delete task?',
            text: "There's no way back!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(30 58 138)',
            cancelButtonColor: 'rgb(185 28 28)',
            confirmButtonText: 'Delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                task_container.current.style.transform = 'translateX(-100vw)'
                setTimeout(async () => {
                    await Swal.fire('Deleted!', 'The task has been deleted', 'success')
                    const NEW_TASKS = DELETE_TASK(uuid)
                    setCurrentTask(NEW_TASKS.tasks)
                }, 700)
            }
        })
    }

    return (
        <div className='w-[1em] h-auto ml-3 flex items-center'>
            <TrashIcon
                className='text-red-400'
                onClick={DELETE_FUNCTION}
            />
        </div>
    )
}

export default DeleteButton