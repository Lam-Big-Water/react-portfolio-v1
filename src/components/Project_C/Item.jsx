import React from 'react';
// import './item.css';

const Item = ({ name, description, icon, repo }) => {
    return (
        <a href={repo} rel='noreferrer' target='_blank'>
            <div className='item'>
                <span className={`${icon} box-icon`}></span>
                <div className='info'>
                    <p className='name'>{name}</p>
                    <p className='description'>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default Item