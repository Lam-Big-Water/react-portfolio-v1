import React from 'react';
import {Link} from 'react-router-dom'
import './content.css';

const Content = () => {
    return (
        <section className='content plain'>
            <article>
                <p>
                Hi, I&apos;m Kelvin, a sophomore at{' '}
                <span className='stress'>
                Beijing University of Technology
                </span>
                , majoring in{' '}
                <span className='stress'>Software Engineering</span>.{' '}
                </p>
                <p>
                    The current focus is on the{' '}
                    <span className='stress'>front-end</span>, based on{' '}
                    <span className='stress'>React</span> ecosystem.
                </p>
                <p>
                    I love <span className='stress'>cats</span>, but allergic
                    to cats.
                </p>
            </article>
            <div className='divider'></div>
            <article>
                <p>
                I enjoy programming. Playing around with code, discovering new tech,
                and building fun and useful projects are my favorite. On the{' '}
                <Link to='/'>
                    <Link className='textLink'>projects</Link>
                </Link>{' '}
                projects page, I will show you all of my projects with a{' '}
                <Link
                    to='https://github.com/kelvinqiu802'
                    className='textLink'
                    rel='noreferrer'
                    target='_blank'
                >
                    Github
                </Link>{' '}
                repository and an online demo.{' '}
                </p>
                <p>Some of my projects: Battleship | mini-react | Kanban | YourCat</p>
            </article>
            <div className='divider'></div>
            <article>
                <p>
                In my spare time, I like creating videos about programming. Not just
                tutorial, but also share some opinions and experience. You can find me
                on <span className='stress'>哔哩哔哩</span> by searching
                Dragonfly_Y or clicking{' '}
                <Link
                    to='https://space.bilibili.com/38563775'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    this link{' '}
                </Link>
                .
                </p>
            </article>
            <div className='divider'></div>
            <article>
                <p>
                Find me on{' '}
                <Link
                    to='https://github.com/kelvinqiu802'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    Github{' '}
                </Link>
                and{' '}
                <Link
                    to='https://space.bilibili.com/38563775'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    哔哩哔哩
                </Link>
                .
                </p>
                <p>
                Mail me at{' '}
                <Link
                    to ='mailto:kelvinqiu802@outlook.com'
                    rel='noreferrer'
                    target='_blank'
                    className='textLink'
                >
                    kelvinqiu802@outlook.com
                </Link>
                .
                </p>
            </article>
        </section>
    )
}

export default Content