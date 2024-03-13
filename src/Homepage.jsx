import { ChevronRightIcon, PaperClipIcon} from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Homepage(){
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
    })

    const cards = [
        <img key="1" src="/public/sert1.png" alt="" />,
        <img key="2" src="/public/sert1.png" alt="" />,
        <img key="3" src="/public/sert1.png" alt="" />,
        <img key="4" src="/public/sert1.png" alt="" />,
        <img key="5" src="/public/sert1.png" alt="" />,
    ]
    
    return(
    <div>
        {/* Hero */}
        <div className="hero min-h-screen bg-[url('https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg')]">
            <div className="hero-content flex-col lg:flex-row">
                <img data-aos="fade-right" src="/1702711021327.jpg" className="filter grayscale max-w-s rounded-lg shadow-2xl m-8" />
                <div data-aos="fade-left">
                <h1 className="text-5xl font-bold text-gray-900">Hello folks !</h1>
                <p className="py-6 text-gray-800">my name is Jovis. I am 23 years old and have a hobby of playing games. I enjoy solving code puzzles and exploring the world of software development. My desire to continue learning, innovating and creating technology solutions that benefit many people is what push me in this field.</p>
                <button className="btn text-gray-50">let's explore</button>
                </div>
            </div>
        </div>

        {/* Experience */}
        <ul id="experience" className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-20">
            <div className="text-5xl text-center mb-10">
                Experience.
            </div>
            <li>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div data-aos="fade-right" className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-black">Executive Marketing</div>
                <p className="font-light italic text-sm mb-4">CV. Deli Mitra Lestari Yamaha</p>
                I am responsible for increasing sales, innovating, and providing consulting services to consumers. I guarantee customer service starting from product selection, ordering process, credit application, to delivery of units to consumers.
                </div>
                <hr/>
            </li>
            <li>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div data-aos="fade-left" className="timeline-end md:text-start mb-10">
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">IT Support</div>
                <p className="font-light italic text-sm mb-4">CV. Medan Media Utama</p>
                I am responsible for increasing sales, innovating, and providing consulting services to consumers. I guarantee customer service starting from product selection, ordering process, credit application, to delivery of units to consumers.
                </div>
                <hr/>
            </li>
            <li>
                <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div data-aos="fade-right" className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2023</time>
                <div className="text-lg font-black">Front End Development (Intern)</div>
                <p className="font-light italic text-sm mb-4">PT. Mitra Telematika Utama</p>
                I am responsible for increasing sales, innovating, and providing consulting services to consumers. I guarantee customer service starting from product selection, ordering process, credit application, to delivery of units to consumers.
                </div>
                <hr/>
            </li>
        </ul>

        {/* Application */}
        <div id='certification' data-aos="zoom-in" className="bg-gray-100 p-14 m-14 max-md:p-2 max-md:m-2 rounded-md">
        <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Certification</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and certification.</p>
        </div>
        <div className="mt-6 border-t border-gray-700">
            <dl className="divide-y divide-gray-700">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">JOVIS JOCUNDA</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Certification</dt>
                    <div>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Learn Web Programming Basics (dicoding)</dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Learn JavaScript Programming Basics (dicoding)</dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Learn to Create a Web Front-End for Beginners (dicoding)</dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Learn DevOps Basics (dicoding)</dd>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Data and Software Engineering (Revou)</dd>
                    </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">jocjovis@gmail.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">I don't expect a higher salary, because I am still in the learning process and am willing to be paid voluntarily for an internship</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                This certification is the result of my experience learning about web development. I understand HTML/CSS, Javascript, Node.Js, API, MySQL, and Postman. and understand the concept of Frontend frameworks, one of which is Vite and React
                </dd>
            </div>
            <div className="h-auto flex items-center mt-4">
                <div className="w-screen flex space-x-4 snap-proximity snap-x overflow-x-auto no-scrollbar">
                    {cards.map((card) => card)}
                </div>
            </div>
            </dl>
        </div>
        </div>

        {/* Skill */}
        <div>
            <div className="text-5xl text-center my-10">
                My Skills.
            </div>
            <div className="flex justify-center my-16">
                <div className="max-w-full inline-flex flex-nowrap  overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll-left">
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="html" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="js" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="nodejs" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png" alt="mysql" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://sagaratechnology.com/blog/wp-content/uploads/2021/08/API-Application-Programming-Interface.png" alt="api" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" alt="postman" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                        </li>
                    </ul>
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll-left" aria-hidden="true">
                    <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="html" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="Disney" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="js" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png" alt="mysql" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://sagaratechnology.com/blog/wp-content/uploads/2021/08/API-Application-Programming-Interface.png" alt="api" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" alt="postman" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center my-16">
                <div className="max-w-full inline-flex flex-nowrap  overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll-right">
                    <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="html" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="js" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="nodejs" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png" alt="mysql" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://sagaratechnology.com/blog/wp-content/uploads/2021/08/API-Application-Programming-Interface.png" alt="api" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" alt="postman" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                        </li>
                    </ul>
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll-right" aria-hidden="true">
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" alt="html" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="css" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="js" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png" alt="nodejs" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-13.png" alt="mysql" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://sagaratechnology.com/blog/wp-content/uploads/2021/08/API-Application-Programming-Interface.png" alt="api" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png" alt="postman" />
                        </li>
                        <li>
                            <img class="h-24 w-auto" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Linkedin */}
        <div id='linkedin' className="relative isolate overflow-hidden bg-white">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
            <defs>
                <pattern
                    id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <img
                        className="h-11 animate-ping absolute"
                        src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
                        alt="Your Company"
                    />
                    <img
                        className="h-11 relative"
                        src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
                        alt="Your Company"
                    />
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                            <span>Portofolio v1.0</span>
                            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </a>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        #Let'sConnect
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Let's connect and communicate about anything related to technology.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                        href="https://www.linkedin.com/in/jovis-jocunda/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Jump to Linked.in
                        </a>
                    </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            src="/sslinkedin.png"
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[50rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            data-aos="fade-left"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer class="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
            <div class="container pt-9">
                <div class="mb-6 flex justify-center">
                <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                        fill-rule="evenodd"
                        clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
                <a href="#!" class="text-neutral-800 dark:text-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                </div>
            </div>
            <div>
                <div
                    class="w-full  text-cente dark:text-neutral-200">
                    © 2024 Copyright Jovis Jocunda Portofolio.
                </div>
                <div
                    class="w-full  mb-3 text-cente dark:text-neutral-200">
                    This website uses tailwind, vite + react technology.
                </div>
            </div>
        </footer>
    </div>
    )
}
