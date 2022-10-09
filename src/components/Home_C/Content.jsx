import React from 'react';
import {Link} from 'react-router-dom'
import './content.css';

const Content = () => {
    return (
        <section className='content plain'>
            <article>
                <p>
                Hi, I&apos;m Sam, a failed to graduate at{' '}
                <span className='stress'>
                HKBU-SCE YJ Diploma student
                </span>
                , majoring in{' '}
                <span className='stress'>Computer Science</span>.{' '}
                </p>
                <p>
                    The current focus is on the{' '}
                    <span className='stress'>front-end</span>, based on{' '}
                    <span className='stress'>React</span> ecosystem.
                </p>
            </article>
            <div className='divider'></div>
            <article>
                <p>
                I enjoy programming. Playing around with code, discovering new tech,
                and building fun and useful projects are my favorite. On the{' '}
                <Link to='/project'>
                    <span className='textLink'>projects</span>
                </Link>{' '}
                page, I will show you all of my projects with a{' '}
                <a
                    href='https://github.com/kelvinqiu802'
                    className='textLink'
                    rel='noreferrer'
                    target='_blank'
                >
                    Github
                </a>{' '}
                repository and an online demo.{' '}
                </p>
            </article>
            <div className='divider'></div>
            <article>
                <p>
                Find me on{' '}
                <a
                    href='https://github.com/kelvinqiu802'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    Github{' '}
                </a>
                and{' '}
                <a
                    href='https://my-blog-bxku.vercel.app/'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    Blog
                </a>
                .
                </p>
                <p>
                Mail me at{' '}
                <span>
                    xlin67948@gmail.com
                </span>
                .
                </p>
            </article>
        </section>
    )
}

export default Content