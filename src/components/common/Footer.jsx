import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <p className='cc'>
                <Link 
                to='https://creativecommons.org/licenses/by-nc-sa/4.0/'
                rel='noreferrer'
                target='_blank'
                >
                    CC BY-NC-SA 4.0
                </Link>
                © Yang Qiu
            </p>
            <Link to='https://beian.miit.gov.cn/' rel='noreferrer' target='_blank'>
                京ICP备2022001803号
            </Link>
        </section>
    )
}

export default Footer