import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline   transform transition-transform duration-300  hover:scale-105 hover:text-blue-400'>
            <a href="">Shahadat</a>
        </div>
        <div className='lg:space-x-6 md:space-x-6 space-x-[10px]'> 
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Services</a>
            <a href="#project" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400 hidden'>Contact</a>
        </div>
        <button  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="https://www.linkedin.com/in/shahadat1717/">Hiring Me</a> </button>
    </div>
    </nav>
  )
}

export default Navbar