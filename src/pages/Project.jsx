import React from 'react';
import Item from '../components/Project_C/Item'
import Footer from '../components/common/Footer';
import './project.css';


const Project = () => {
    return (
        <>
            <div className='box'>
                <p className='title'>Projects</p>
                <div className='list'>
                <Item
                    name='Drag-Drop_todoList'
                    description='A todoList Web App Built with React.'
                    icon='fas fa-sticky-note'
                    repo='http://drag-drop-todolist.vercel.app/'
                />
                <Item
                    name='Travel Website'
                    description='A Travel Website Built with React.'
                    icon='fas fa-suitcase-rolling'
                    repo='http://react-travel-website-vite.vercel.app/'
                />
                {/* <Item
                    name='bookstore'
                    description='A Book Searching Website using Google Book API.'
                    icon='fas fa-book'
                    repo='https://github.com/KelvinQiu802/bookstore'
                /> */}
                {/* <Item
                    name='your-cat'
                    description='A website that will help you to choose the best breed of cat for you by asking you a few questions.'
                    icon='fas fa-check-double'
                    repo='https://github.com/KelvinQiu802/your-cat'
                /> */}
                </div>
                <p className='title'>Demo</p>
                <div className='list'>
                <Item
                    name='component box'
                    description='Create a personal component library.'
                    icon='fas fa-box'
                    repo='https://github.com/Lam-Big-Water/component-box'
                />
                </div>
            </div>
            <Footer />
    </>
    )
}

export default Project