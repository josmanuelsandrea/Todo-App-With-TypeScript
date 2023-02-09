import { FC } from 'react'
import { useContext } from 'react'
import { CheckCircleIcon as CheckIcon, MinusSmallIcon as UncompletedIcon } from '@heroicons/react/24/solid'
import { ListDataType, ContextTodo } from '../utils/Todos/ContextTodo'
import { UPDATE_TASK } from '../utils/Todos/handleTasks'

interface Props {
    text: string,
    completed: ListDataType,
    uuid: string
}

const Task: FC<Props> = ({ text, completed, uuid }) => {
    const { setCurrentTask } = useContext(ContextTodo)
    return (
        <div 
            className="flex text-3xl items-center" 
            onClick={() => {
                const NEW_TASKS = UPDATE_TASK(uuid)
                setCurrentTask(NEW_TASKS.tasks)
            }}
        >
            <div className='w-[1.2em] h-auto mr-3'>
                {
                    completed === ListDataType.Completed
                    ? <CheckIcon className='text-blue-900'/> 
                    : <UncompletedIcon className='text-red-700' />
                }
            </div>
            <li className={`${completed === ListDataType.Completed && 'line-through text-gray-500'}`}>{text}</li>
        </div>
    )
}

export default Task