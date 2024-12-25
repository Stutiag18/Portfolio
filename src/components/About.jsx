import { ABOUT_CONTENT } from "../constants"
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'



    const textVariants = {
        hidden: {
            opacity: 0,
            y:50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.8,
            ease: "easeOut"
            }
        }
        }

        const About = () => {

            const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
            const rect = section.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            setInView(isInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
   <section className="px-6 py-6 " id="about">

    <h1 className="text-4xl md:text-6xl font:medium tracking-tight mb-5">
        ABOUT
    </h1>

    <div className="h-1 w-20 mb-8 bg-white"></div>

    <div className="max-w-6xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p key = {index} className = "text-xl md:text-2xl lg:text-4xl mb-10 leading-relaxed"
        initital = "hidden"
        animate = {inView ? "visible" : "hidden"}
    // whileInView = "visible"
// viewPort = {{once: true , amount: 0.5}}
variants= {textVariants}>
    {paragraph}
</motion.p>))}
    </div>
   </section>
  )
}

export default About
