import { ContextProvider } from '../utils/Todos/ContextTodo'
import { ListDataType } from '../utils/Todos/ContextTodo'
import NavigationText from './NavigationText'
import List from './List'
import Modal from './Modal'
import { StatusProvider } from '../utils/Status/StatusTodo'

const ListMaster = () => {
    return (
        <ContextProvider>
            <StatusProvider>
                <div className='flex flex-auto font-Ubuntu flex-col'>
                    <div className='mt-5 flex justify-center w-full gap-5 h-fit mb-5'>
                        <NavigationText text={ListDataType.Completed} />
                        <NavigationText text={ListDataType.Uncompleted} />
                    </div>
                    <List />
                    <Modal />
                </div>
            </StatusProvider>
        </ContextProvider>
    )
}

export default ListMaster