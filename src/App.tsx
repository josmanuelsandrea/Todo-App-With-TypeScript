import './App.css';
import Navbar from './components/Navbar';
import ListMaster from './components/ListMaster'; 

const tailwindProperties: string = 'w-screen flex h-screen flex-col bg-gray-100'

function App() {
    return (
        <div className={tailwindProperties}>
            <Navbar />
            <ListMaster />
        </div>
    );
}

export default App;
