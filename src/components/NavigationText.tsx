import { useContext } from 'react'
import { FC } from "react"
import { ListDataType, ContextTodo } from "../utils/ContextTodo"

interface Props {
    text: ListDataType
}

const NavigationText: FC<Props> = ({ text }) => {
    const { active_list, setActiveList } = useContext(ContextTodo)

    return (
        <p 
            className={`text-2xl border-solid border-b-2 ${active_list === text ? 'border-blue-900' : 'border-transparent'} pb-2 hover:border-blue-900 cursor-pointer transition-all`}
            onClick={() => { setActiveList(text) }}
        >
            {text}
        </p>
    )
}

export default NavigationText