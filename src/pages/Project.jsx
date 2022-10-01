import React from 'react';
import Item from '../components/Project_C/Item'
import './project.css';


const Project = () => {
    return (
        <>
            <div className='box'>
                <p className='title'>Projects</p>
                <div className='list'>
                <Item
                    name='battleship'
                    description='A Battleship Game on Web with React.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/battleship'
                />
                <Item
                    name='kanban-react'
                    description='A Kanban Web App Built with React.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/kanban-react'
                />
                <Item
                    name='micro-react'
                    description='A micro React that implements React core concepts.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/micro-react'
                />
                <Item
                    name='mini-redux'
                    description='Use the most simple Javascript to implement Redux core functions.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/mini-redux'
                />
                <Item
                    name='bookstore'
                    description='A Book Searching Website using Google Book API.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/bookstore'
                />
                <Item
                    name='your-cat'
                    description='A website that will help you to choose the best breed of cat for you by asking you a few questions.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/your-cat'
                />
                </div>
                <p className='title'>Demo</p>
                <div className='list'>
                <Item
                    name='163-music-downloader'
                    description='A tampermonkey script to download 163 music.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/163MusicDownloaderScript'
                />
                <Item
                    name='dark-mode-toggle'
                    description='A dark mode demo.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/dark-mode-toggle'
                />
                </div>
            </div>
    </>
    )
}

export default Project