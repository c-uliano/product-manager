import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import DisplayOne from './components/DisplayOne';

function App() {
    return (
        <div className='w-50 mx-auto mt-4'>
            <Routes>
                {/* <Route element={<h1>Nothing is here yet, check /api/product/create</h1>} path="/" default /> */}
                <Route element={<Main />} path="/" />
                <Route element={<DisplayOne />} path="/:id" />
            </Routes>
        </div>
    );
}

export default App;
