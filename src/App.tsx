import './App.css';
import Navbar from './components/Navbar';
import ListMaster from './components/ListMaster';
import { StatusProvider } from './utils/Status/StatusTodo';
import { TodoProvider } from './utils/Todos/ContextTodo';

const tailwindProperties: string = 'w-screen flex h-screen flex-col bg-gray-100'

function App() {
    return (
        <div className={tailwindProperties}>
            <TodoProvider>
                <StatusProvider>
                    <Navbar />
                    <ListMaster />
                </StatusProvider>
            </TodoProvider>
        </div>
    );
}

export default App;
