import { ContextProvider } from '../utils/ContextTodo'
import { ListDataType } from '../utils/ContextTodo'
import { PlusIcon } from '@heroicons/react/24/solid'
import NavigationText from './NavigationText'
import List from './List'

const ListMaster = () => {
    return (
        <ContextProvider>
            <div className='flex flex-auto font-Ubuntu flex-col'>
                <div className='mt-5 flex justify-center w-full gap-5 h-fit mb-5'>
                    <NavigationText text={ListDataType.Completed} />
                    <NavigationText text={ListDataType.Uncompleted} />
                </div>
                <List />
                <div className='fixed inset-0 flex w-full h-screen justify-center items-center z-50 bg-white'>
                    <div className="absolute rounded-sm bg-white shadow-sm flex w-[90%] h-[calc(100%-2rem)] border-2 font-Ubuntu flex-col">
                        <div className='mt-4 flex-initial flex justify-center'>
                            <h1 className='text-blue-900 text-4xl'>Create new task</h1>
                        </div>
                        <div className='flex-auto flex justify-evenly items-center flex-col'>
                            <div className='w-[70%] flex justify-center flex-col'>
                                <div>
                                    <p className='text-2xl'>Task name:</p>
                                </div>
                                <input type="text" className='rounded-md border-solid border-2 text-2xl px-2 py-2 border-blue-200 focus-visible:outline-none'/>
                            </div>
                            <button className='rounded-md flex items-center text-2xl border-2 px-2 py-1 border-blue-200 hover:text-white hover:bg-blue-900'>
                                <span>Add task</span>
                                <div className='w-[1.3em]'>
                                    <PlusIcon />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ContextProvider>
    )
}

export default ListMaster