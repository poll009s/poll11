import React from 'react';
import {motion} from 'framer-motion';



function About(){

    return (
        <section className='about sec-pad '>
            <div className='main-container bg-gray-100 pb-10'>
                <h2 className='heading heading-sec heading-sec__mb-med'>
                    <span className='heading-sec__main font-extrabold'>ABOUT ME</span>
                    <span className='heading-sec__sub'>Here you will find more information about me, what I do, and my current skills mostly in terms</span>
                    <p className='text-center text-gray-700 text-2xl'>of programming and technology</p>
                </h2>
            

            <div className='about__content  grid grid-cols-3 gap-4 place-items-stretch text-center border-blue-500 border-4'>
                <div className='border-4 border-blue-500 lg:w96 lg:ml-52 md:ml-1 md:w-full sm:w-full sm:ml-1'>
                    <h3 className='font-bold mr-72 text-xl mb-10 '>Get to know me!</h3>
                    <div className='grid grid-cols-1 gap-6 '>
                        <p className='text-lg  text-gray-400  max-w-4xl leading-9 mb-16 mr-24 md:mr-2 md:leading-6 md:mb-6 sm:mr-2 sm:leading-6 sm:mb-6'> I'm a <strong>Frontend Focused Web Developer</strong>  building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong>  section.</p>
                        <p className='text-lg  text-gray-400 max-w-4xl leading-6   '> I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong>  so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='text-violet-600 font-extrabold' >Linkedin</a> and <a className='text-violet-600 font-extrabold'>Instagram</a> where I post useful content related to </p>
                        <p className='text-lg  text-gray-400 max-w-4xl  mr-96 mb-16 md:mr-12 md:mb-10 sm:mr-12 sm:mb-10 '>Web Development and Programming</p>
                        <p className='text-lg  text-gray-400 max-w-4xl leading-6 mb-4 '> I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                    <motion.button 
                    whileHover={{
                        scale:1.05,
                    }}
                    className='bg-violet-600  uppercase tracking-widest font-extrabold rounded-xl btn-bng hover:bg-violet-900 animate-pulse text-white'>Contact</motion.button>
                </div>
                <div className='border-4 border-blue-500 w97 mt-0 lg:ml-80 md:w-full md:ml-1 sm:ml-1 sm:w-4/5'>
                    <h3 className='font-bold mr-80 text-xl mb-10'>My Skills</h3>
                    <div className='flex flex-wrap'>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : 'red'
                          }}
                          exit={{
                            color:'white'
                          }}
                          className='skills__skill'>HTML</motion.div>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : ['blue' ]
                          }}
                          className='skills__skill'>CSS</motion.div>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : ['yellow' ]
                          }}
                          className='skills__skill'>JavaScript</motion.div>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : ['blue' ]
                          }}
                          className='skills__skill'>React</motion.div>
                          <motion.div
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : ['blue' ]
                          }}
                          className='skills__skill'>tailwindcss</motion.div>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : 'green'
                          }}
                          exit={{
                            color:'white'
                          }}
                          className='skills__skill'>PHP</motion.div>
                          <motion.div 
                          whileHover={{
                              scale:1.05,
                              scaleY:1.09,
                              color : ['black' ]
                            }}
                          className='skills__skill'>Github</motion.div>
                          <motion.div 
                          whileHover={{
                            scale:1.05,
                            scaleY:1.09,
                            color : ['black' ]
                          }}
                          className='skills__skill'>Terminal</motion.div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    );

}

export default About;