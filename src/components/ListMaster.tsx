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
            <div className='mt-5 mx-1 flex w-full h-fit mb-5'>
                {!searchStatus && 
                    <div className='mx-5 flex w-full justify-center gap-5 md:justify-between md:gap-0 md:mx-[6em] lg:mx-[14em] xl:mx-[21em] 2xl:mx-[28em]'>
                        <NavigationText related_data_type={ListDataType.Completed} />
                        <NavigationText related_data_type={ListDataType.Uncompleted} />
                    </div>
                }
                {searchStatus &&
                    <div className='mx-5 flex w-full justify-center'>
                        <NavigationText related_data_type={ListDataType.Global} />
                    </div>
                }
            </div>
            <List />
            <Modal />
        </div>
    )
}

export default ListMaster