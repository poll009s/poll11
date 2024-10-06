import React,{useState} from "react";
import SrcImg from '../images/Dra.jpg'
import UseAnimation from '../pages/UseAnimation'
import About from "../pages/About";
import {motion} from 'framer-motion'
function NaveBare() {

  const [toggles , setIsToggles]  = useState(false);
 

  const  isTogglesShow =()=>{
         
    setIsToggles(!toggles);

  }
  return (
    <nav className="bg-slate-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-slate-200 text-lg font-semibold flex">
          <motion.img 
           whileHover={{
            scale:1.05,
            scaleY : 1.4,
            
        }}
          src={SrcImg} alt="MOHAMED ELOUADI" className="w-20 h-full object-cover object-center block rounded-full" />
          <motion.a 
           whileHover={{
            scale:1.05,
            scaleY : 1.05,
            color : 'blueviolet'
            
        }}
          href="#" className="text-black mt-2 ml-5 tracking-wider hover:text-gray-900">
         MOAHMED ELOUADI
          </motion.a>
          
        </div>
        <div className="hidden md:flex space-x-24 ">
          <motion.a 
          whileHover={{
            scale:1.05,
            scaleY : 1.05,
            color : 'blueviolet'
            
        }}
          href="/" className="text-black hover:text-gray-900 font-bold text-lg ">
            HOME
          </motion.a>
          <motion.a 
          whileHover={{
            scale:1.05,
            scaleY : 1.05,
            color : 'blueviolet'
            
        }}
          href="/About" className="text-black hover:text-gray-900 font-bold text-lg">
            ABOUT
          </motion.a>
          <motion.a
          whileHover={{
            scale:1.05,
            scaleY : 1.05,
            color : 'blueviolet'
            
        }}
          href="../pages/UseAnimation" className="text-black hover:text-gray-900 font-bold text-lg">
            PROJECT
          </motion.a>
          <motion.a 
          whileHover={{
            scale:1.05,
            scaleY : 1.05,
            color : 'blueviolet'
            
        }}
          href="#" className="text-black hover:text-gray-900 font-bold text-lg">
            CONTACT
          </motion.a>
        </div>
        <button onClick={isTogglesShow} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden mt-2 space-y-2 ${toggles ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-black hover:text-gray-300">
          Home
        </a>
        <a href="#" className="block text-black hover:text-gray-300">
          About
        </a>
        <a href="#" className="block text-black hover:text-gray-300">
          Services
        </a>
        <a href="#" className="block text-black hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NaveBare;
