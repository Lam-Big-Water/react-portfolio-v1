import React from 'react';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Project from './pages/Project';



const App = () => {
    const [mode, setMode] = React.useState('light');

    React.useEffect(() => {
        if (localStorage.getItem('mode')) {
            setMode(localStorage.getItem('mode'));
        }
    },[])
    return (
        <div className='layout' color-mode={mode}>
            <NavBar setMode={setMode} mode={mode}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/project' element={<Project/>}/>
            </Routes>
        </div>
    )
}

export default App