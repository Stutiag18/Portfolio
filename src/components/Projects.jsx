import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'


    const projectVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -40,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 1, // Increase duration for smoother transition
                ease: [0.42, 0, 0.58, 1], // Use a custom cubic-bezier for smoother easing
                type: "spring",
                stiffness: 100, // Adjust stiffness for smoother spring effect
                damping: 20 // Adjust damping for smoother spring effect
            }
        }}

        const Projects = () => {
            const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('work');
            const rect = section.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            setInView(isInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div>
      <section className='px-6 py-6 min-h-screen ' id = "work">
        <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-5'>WORK</h1>
        <div className='h-1 w-20 mb-10 bg-white'></div>


        <div  className='grid grid-cols-1 md:grid-cols-4 gap-6'> 
            {PROJECTS.map((project, index) => (
                <motion.div 
                key = {index}
                 className = "relative rounded-lg overflow-hidden h-[500px] transition transform hover:scale-105"    
                        initial = "hidden"
            whileInView = "visible"
            animate= {inView ? "visible" : "hidden"}
            // viewport= {{once : true}}
            variants = {projectVariants}>
                <img src = {project.image}
                alt = {project.name}
                className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300' />

                <div className='relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white'>
                <h2 className='text-2xl font-medium mb-4'>
                    {project.name}</h2>
                    <div className='flex flex-col justify-between'>
                        <p className='mb-4 flex-grow text-2xl'>{project.description}</p>
                        <a href={project.link}
                        target = "_blank"
                        rel = "noopener norefferer"
                        className = "bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-300 hover:scale-105 text-center">
                            View on Github
                        </a>
                    </div>
                    </div>
            </motion.div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
