import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';

function App() {
    return (
        <div className='w-50 mx-auto mt-4'>
            <Routes>
                <Route element={<h1>Nothing is here yet, check /api/product/create</h1>} path="/" />
                <Route element={<Form />} path="api/product/create" />
            </Routes>
        </div>
    );
}

export default App;
