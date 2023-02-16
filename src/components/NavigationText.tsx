import { useContext, useEffect, useState } from 'react'
import { FC } from "react"
import { ListDataType, ContextTodo } from "../utils/Todos/ContextTodo"

interface Props {
    related_data_type: ListDataType
}

const NavigationText: FC<Props> = ({ related_data_type }) => {
    const { active_list, setActiveList, currentTasks } = useContext(ContextTodo)
    const [taskLength, setTaskLength] = useState<number>(0)
    
    useEffect(() => {
        const getTasksLength = () => {
            if (related_data_type === ListDataType.Global){
                return currentTasks.length
            }
            return currentTasks.filter(task => task.status === related_data_type).length
        }

        const length = getTasksLength()
        setTaskLength(length)
    }, [currentTasks, related_data_type])


    return (
        <p 
            className={`text-2xl border-solid border-b-2 flex items-center ${active_list === related_data_type ? 'border-blue-500' : 'border-transparent'} pb-2 hover:border-blue-500 cursor-pointer transition-all`}
            onClick={() => { setActiveList(related_data_type) }}
        >
            {related_data_type === ListDataType.Global ? 'All' : related_data_type }
            <span className='rounded-full py-0 px-2 bg-blue-500 text-white ml-3 text-base'>{taskLength}</span>
        </p>
    )
}

export default NavigationText