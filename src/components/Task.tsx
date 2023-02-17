import { FC, useRef } from 'react'
import { ListDataType } from '../utils/Todos/ContextTodo'
import CompletedIcons from './task-components/CompletedIcons'
import Text from './task-components/Text'
import DeleteButton from './task-components/DeleteButton'

interface Props {
    text: string,
    completed: ListDataType,
    uuid: string
}

const Task: FC<Props> = ({ text, completed, uuid }) => {
    const task_container = useRef<HTMLDivElement>(document.createElement('div'))
    return (
        <div className="flex text-3xl items-center transition-all duration-700 mx-3" ref={task_container}>
            <CompletedIcons completed={completed} />
            <Text completed={completed} text={text} uuid={uuid} task_container={task_container} />
            <DeleteButton uuid={uuid} task_container={task_container} />
        </div>
    )
}

export default Task