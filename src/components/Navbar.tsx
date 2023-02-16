import { ChangeEvent, FC } from "react"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { StatusContext } from "../utils/Status/StatusTodo"
import { ContextTodo, ListDataType } from "../utils/Todos/ContextTodo"
import { useContext, useState } from "react"
import { checkStorage } from "../utils/Todos/checkStorage"

interface Props {}

const Navbar: FC<Props> = () => {
    
    const { searchStatus, toggleSearchStatus } = useContext(StatusContext)
    const { setCurrentTask, setActiveList, active_list } = useContext(ContextTodo)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const searchTasks = (e: ChangeEvent<HTMLInputElement>) => {
        const { tasks: tasksOnDatabase } = checkStorage()
        const word: string = e.target.value
        const validTasks = tasksOnDatabase.filter(task => task.name.toLowerCase().includes(word.toLowerCase()))

        if (validTasks.length > 0 && word.length > 0){
            setCurrentTask(validTasks)
            setErrorMessage('')
        } else {
            setCurrentTask(tasksOnDatabase)
            setErrorMessage('No tasks found')
        }
    }

    return (
        <nav className='w-full flex flex-initial justify-between items-center'>
            {searchStatus && 
                <div className="my-2 ml-5 flex flex-col">
                    <input type="text" className="rounded-md border-blue-500 border-2 text-xl focus-visible:outline-none px-1 py-1 font-medium" onChange={searchTasks} />
                    <p className="text-red-500 font-medium">{errorMessage}</p>
                </div>
            }
            {!searchStatus && <h2 className='font-Ubuntu text-4xl mt-3 mb-3 ml-5 text-blue-500'>Your Todo</h2>}
            <div className="w-[2.3em] h-auto my-2 mr-5" onClick={() => {
                toggleSearchStatus()
                if (active_list !== ListDataType.Global){
                    setActiveList(ListDataType.Global)
                } else {
                    setActiveList(ListDataType.Uncompleted)
                }
            }}>
                {searchStatus ? <XMarkIcon className="text-black hover:text-blue-800"/> : <MagnifyingGlassIcon className="text-black hover:text-blue-800"/>}
            </div>
        </nav>
    )
}

export default Navbar