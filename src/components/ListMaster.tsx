import { ContextProvider } from '../utils/Todos/ContextTodo'
import { ListDataType } from '../utils/Todos/ContextTodo'
import NavigationText from './NavigationText'
import List from './List'
import Modal from './Modal'

const ListMaster = () => {
    return (
        <ContextProvider>
            <div className='flex flex-auto font-Ubuntu flex-col'>
                <div className='mt-5 flex justify-center w-full gap-5 h-fit mb-5'>
                    <NavigationText text={ListDataType.Completed} />
                    <NavigationText text={ListDataType.Uncompleted} />
                </div>
                <List />
                <Modal />
            </div>
        </ContextProvider>
    )
}

export default ListMaster