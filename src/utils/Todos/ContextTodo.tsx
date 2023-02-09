import { createContext, ReactNode, FC, useState, Dispatch, useEffect } from "react"
import { TaskType, checkStorage } from "./checkStorage"

enum ListDataType {
    Completed = 'Completed',
    Uncompleted = 'Uncompleted',
}

interface ContextType {
    active_list: ListDataType,
    setActiveList: Dispatch<React.SetStateAction<ListDataType>>,
    setCurrentTask: Dispatch<React.SetStateAction<TaskType[]>>
    currentTasks: TaskType[]
    loading: boolean,
}

interface Props {
    children?: ReactNode
}

const ContextTodo = createContext<ContextType>({
    active_list: ListDataType.Uncompleted,
    setActiveList: () => {},
    setCurrentTask: () => {},
    currentTasks: [],
    loading: false,
})

const ContextProvider: FC<Props> = ({ children }) => {
    const [activeList, setActiveList] = useState<ListDataType>(ListDataType.Completed)
    const [currentTasks, setCurrentTasks] = useState<TaskType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        const TASK_LIST = checkStorage()
        setCurrentTasks(TASK_LIST.tasks)
        setLoading(false)
    }, [])

    return (
        <ContextTodo.Provider 
            value={{ 
                active_list: activeList, 
                setActiveList: setActiveList, 
                loading: loading, 
                currentTasks: currentTasks,
                setCurrentTask: setCurrentTasks,
            }}>
            {children}
        </ContextTodo.Provider>
    )
}

export {
    ListDataType,
    ContextTodo,
    ContextProvider
}