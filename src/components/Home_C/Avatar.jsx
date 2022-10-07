import React from 'react';
import './avatar.css';
import Image from  '../../images/avatar.jfif';


const Avatar = () => {
    return (
        <section className='container'>
            <img 
            src={Image} 
            width={85}
            height={85}
            alt='avatar'
            className='avatar'
            />
            <div className='description'>
                <h1 className='name'>Sam Lam</h1>
                <p className='tag'>Front-End Developer / HongKong</p>
            </div>
        </section>
    )
}

export default Avatar