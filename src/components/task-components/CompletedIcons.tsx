import { CheckCircleIcon as CheckIcon, ChevronDoubleRightIcon as UncompletedIcon } from '@heroicons/react/24/solid'
import { FC } from "react"
import { ListDataType } from "../../utils/Todos/ContextTodo"

interface Props {
    completed: ListDataType
}

const CompletedIcons: FC<Props> = ({ completed }) => {
    return (
        <div className='w-[1em] h-auto mr-3 flex items-center'>
            {
                completed === ListDataType.Completed
                    ? <CheckIcon className='text-blue-500' />
                    : <UncompletedIcon className='text-red-500' />
            }
        </div>
    )
}

export default CompletedIcons