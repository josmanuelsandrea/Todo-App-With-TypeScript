import { PlusIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useRef, useContext } from 'react'
import { ContextTodo, ListDataType } from '../utils/Todos/ContextTodo'
import { StatusContext } from '../utils/Status/StatusTodo'
import { ADD_TASK } from '../utils/Todos/handleTasks'
import { TaskType } from '../utils/Todos/checkStorage'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'

const Modal = () => {
    const task_name = useRef<HTMLInputElement>(document.createElement('input'))
    const { setCurrentTask } = useContext(ContextTodo)
    const { toggleModalStatus, modalStatus } = useContext(StatusContext)

    const uploadTask = (): void => {
        const task_name_value = task_name.current.value

        if (task_name_value.length <= 0) {
            alert('Task name cannot be empty')
            return
        }

        const TASK: TaskType = {
            name: task_name.current.value,
            completed: ListDataType.Uncompleted, // this is the default status for new tasks
            uuid: uuidv4()
        }

        const CURRENT_TASKS = ADD_TASK(TASK)
        setCurrentTask(CURRENT_TASKS.tasks)
        Swal.fire(
            'Task created!',
            '',
            'success'
        )
    }

    return (
        <div className={`fixed inset-0 flex ${modalStatus ? 'scale-1' : 'scale-0'} duration-400 w-full h-screen justify-center items-center z-50 bg-white transition-all`}>
            <div className="absolute rounded-sm bg-white shadow-sm flex w-[90%] h-[calc(100%-2rem)] border-2 font-Ubuntu flex-col">
                <div className='mt-4 flex-initial flex justify-center'>
                    <h1 className='text-blue-500 text-4xl'>Create new task</h1>
                </div>
                <div className='flex-auto flex justify-evenly items-center flex-col'>
                    <div className='w-[70%] flex justify-center flex-col'>
                        <div>
                            <p className='text-2xl'>Task name:</p>
                        </div>
                        <input ref={task_name} type="text" className='rounded-md border-solid border-2 text-2xl px-2 py-2 border-blue-500 focus-visible:outline-none focus:bg-blue-500 focus:text-white shadow-md' />
                    </div>
                    <div className='flex flex-col gap-5 just'>
                        <button className='rounded-md flex items-center justify-center text-2xl border-2 px-2 py-1 border-blue-500 hover:bg-blue-500 hover:text-white shadow-md' onClick={uploadTask}>
                            <span>Task</span>
                            <div className='ml-1 w-[1.2em]'>
                                <PlusIcon />
                            </div>
                        </button>
                        <button className='rounded-md flex items-center justify-center text-2xl border-2 px-2 py-1 border-red-500 hover:text-white hover:bg-red-500 shadow-md' onClick={toggleModalStatus}>
                            <span>Leave</span>
                            <div className='ml-1 w-[1.2em]'>
                                <ArrowLeftOnRectangleIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal