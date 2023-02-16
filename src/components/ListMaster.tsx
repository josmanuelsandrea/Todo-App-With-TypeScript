import { ListDataType } from '../utils/Todos/ContextTodo'
import { StatusContext } from '../utils/Status/StatusTodo'
import { useContext } from 'react'
import NavigationText from './NavigationText'
import List from './List'
import Modal from './Modal'

const ListMaster = () => {
    const { searchStatus } = useContext(StatusContext)

    return (
        <div className='flex flex-auto font-Ubuntu flex-col'>
            <div className='mt-5 flex justify-center w-full gap-5 h-fit mb-5'>
                {!searchStatus && 
                    <>
                        <NavigationText related_data_type={ListDataType.Completed} />
                        <NavigationText related_data_type={ListDataType.Uncompleted} />
                    </>
                }
                {searchStatus &&
                    <NavigationText related_data_type={ListDataType.Global} />
                }
            </div>
            <List />
            <Modal />
        </div>
    )
}

export default ListMaster