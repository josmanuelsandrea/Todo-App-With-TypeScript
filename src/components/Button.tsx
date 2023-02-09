import { ContextTodo } from '../utils/Todos/ContextTodo'
import { useContext } from 'react'

const Button = () => {
    const { active_list } = useContext(ContextTodo)

    return (
        <div className="flex justify-center">
            <button 
                className="border-2 border-blue-900 text-xl px-2 py-2 transition-all rounded-md hover:bg-blue-900 hover:text-white" 
            >
                {active_list}
            </button>
        </div>
    )
}

export default Button