import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = ({setMode, mode}) => {
    const handleClick = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
    };

    React.useEffect(() => {
        // toggle HTML theme
        if (mode === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        } 
    }, [mode])
    return (
        <div className='nav-bar'>
            <Link className='signature' to="/">Sam</Link>
            <nav className='nav'>
                <Link className='laptop' to='/'>Me</Link>
                <Link className='laptop' to='/project'>Projects</Link>

                <Link className='link mobile icon fas fa-address-card' to='/'></Link>
                <Link className='link mobile icon fab fa-elementor' to='/project'></Link>

                <Link className='icon fas fa-sun' onClick={handleClick}></Link>
            </nav>
        </div>
    )
}

export default NavBar