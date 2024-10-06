import react from 'react'
import linkdine from '../images/linkdien.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png'
import github from '../images/githube.png'
import book from '../images/booke.png'
import {motion} from "framer-motion"


function Home(){


    return (
        <div className='home-preloanding'>
            <section>
                <div>
                    <div className='pt-72'>
                    <p className=' text-5xl text-black font-extrabold uppercase tracking-widest text-center font-extraboldtext-black'>HEY I AM MOHAMED ELOUADI</p>
                    </div>
                    <div className='pt-10'>
                    <p className='text-xl text-center text-black w-full'> A Result-Oriented Web Developer building and managing Websites and Web</p>
                    <p className='text-xl text-center text-black w-full'> Applications that leads to the success of the overall product</p>
                    </div>
                    <div className='text-center pt-11'>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                    }}
                    className='bg-violet-600  uppercase tracking-widest font-extrabold rounded-lg btn-bng hover:bg-violet-900 animate-pulse'>Projects</motion.button>
                    </div>
                </div>
                <div></div>
                <div></div>

                <div className= ' social-networke md:hidden sm:hidden lg:block'>
                    <motion.div 
                    whileHover={{
                        scale:1.05,
                        scaleY : 1.3,
                        
                    }}
                    className=''>
                        <a 
                         
                        href='https://linkedin.com/in/rammcodes'  target='_blanck'>
                           <img src={linkdine} alt='linkdien' width={40} height={40} />
                        </a> 
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale:1.05,
                        scaleY : 1.3,
                        
                    }}
                    className='mt-7'>
                        <a href='https://linkedin.com/in/rammcodes'  target='_blanck' >
                           <img src={facebook} alt='facebook' width={40} height={40} />
                        </a> 
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale:1.05,
                        scaleY : 1.3,
                        
                    }}
                    className='mt-7'>
                        <a href='https://linkedin.com/in/rammcodes'  target='_blanck'>
                           <img src={youtube} alt='youtube' width={40} height={40} />
                        </a> 
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale:1.05,
                        scaleY : 1.3,
                        
                    }}
                    className='mt-7'>
                        <a href='https://linkedin.com/in/rammcodes'  target='_blanck'>
                           <img src={github} alt='github' width={40} height={40} />
                        </a> 
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale:1.05,
                        scaleY : 1.3,
                        
                    }}
                    className='mt-7'>
                        <a href='https://linkedin.com/in/rammcodes'  target='_blanck'>
                           <img src={book} alt='book' width={40} height={40} />
                        </a> 
                    </motion.div>
                </div>
                 <div className='home-hero__mouse-scroll-cont'>
                 <div className='mouse animate-bounce'>
                 
                </div>

                 </div>
                
            </section>
        </div>
    );
}



export default Home