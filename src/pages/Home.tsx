import { AnimatedSection } from '../animation/AnimationSection';
import logo from '../assets/logo.png'
import logoWhite from '../assets/logoWhite.png'
import bodyLogo from '../assets/bodyImage.png'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
import talata from '../assets/talata.jpg';
import service1 from '../assets/service-1.jpeg'
import service2 from '../assets/service-2.png'
import service3 from '../assets/service-3.png'

export const Home = () => {
    return (
        <AnimatedSection
            config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 }
            }}
        >
            <div className="relative w-full">
                <div className="overflow-hidden">
                    <AnimatedSection
                        config={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 1 }
                        }}
                    >
                        <div className="relative w-full h-screen">
                            <motion.div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `url(${bodyLogo})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            ></motion.div>
            
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
            
                            <div className="relative z-20 w-full pt-30 flex flex-col items-center justify-center px-4 py-6 text-center text-white">
                                <AnimatedSection config={{
                                    initial: { opacity: 0, y: -50, scale: 0.8 },
                                    animate: { opacity: 1, y: 0, scale: 1 },
                                    transition: { delay: 0.3, type: "spring", stiffness: 100 }
                                }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img 
                                            src={logo}
                                            alt='logo' 
                                            className='w-[300px] md:w-[400px] lg:w-[500px] h-auto max-h-[250px] object-contain' 
                                        />
                                    </motion.div>
                                </AnimatedSection>
                                
                                
                                <AnimatedSection config={{
                                    initial: { opacity: 0, y: -20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.8 }
                                }}>
                                    <motion.h1 
                                        className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white'
                                        animate={{
                                            textShadow: ["0 0 8px rgba(234, 179, 8, 0.5)", "0 0 16px rgba(234, 179, 8, 0.7)", "0 0 8px rgba(234, 179, 8, 0.5)"],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        STUDIO BAYMOH
                                    </motion.h1>
                                </AnimatedSection>
            
                                <AnimatedSection config={{
                                    initial: { opacity: 0, scale: 0.95 },
                                    animate: { opacity: 1, scale: 1 },
                                    transition: { delay: 1 }
                                }}>
                                    <p className='text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-yellow-100'>
                                        Where creative vision meets technical excellence - your premier partner for innovative audiovisual solutions
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection config={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.8 }
                                }}>
                                    <Link
                                        to="contact" 
                                        smooth={true} 
                                        duration={500}
                                        offset={-50}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="cursor-pointer bg-yellow-600 hover:bg-yellow-500 px-7 py-3 rounded-full mt-4 text-2xl font-medium shadow-lg shadow-yellow-900/50"
                                        >
                                            Contact
                                        </motion.div>
                                    </Link>
                                </AnimatedSection>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <div className='relative z-20 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200 text-black py-16 px-8 md:px-32'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0, duration: 0.8 }
                    }}>
                        <div className='flex flex-col lg:flex-row lg:w-[70%] w-[90%] mx-auto justify-between gap-8 lg:gap-16 py-8'>
                            <div className="w-full lg:w-[60%]">
                                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-4 md:mb-6'>Welcome</h1>
                                <p className='text-base sm:text-lg md:text-xl font-light leading-relaxed'>
                                    <span className='underline decoration-yellow-400'>BAYMOH</span>, a leading company in the field of audiovisual production, digital education, and virtual events. We are proud to provide integrated solutions that help our clients excel in the rapidly evolving digital world.
                                    <br /><br />
                                    Since our establishment in 2022, despite the short duration, we have earned a distinguished reputation thanks to the expertise of our technical and creative team. We constantly strive to develop our skills and discover the latest technologies to be the ideal partner for our clients on their journey towards digital success.
                                </p>
                            </div>

                            <div className='w-full lg:w-[40%] flex flex-col gap-4'>
                                <div className='relative rounded-xl overflow-hidden border-2 border-yellow-600 shadow-lg shadow-yellow-900/50'>
                                    <img 
                                        src={talata} 
                                        alt="logo" 
                                        className='w-full h-auto max-h-64 object-cover'
                                    />
                                </div>
                                
                                <div className='bg-yellow-700 p-4 rounded-lg text-white flex justify-between items-center mt-[-40px] z-10 border border-yellow-500 shadow-lg shadow-yellow-900/30'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold text-yellow-200'>+150</h1>
                                        <p className='text-sm sm:text-base text-yellow-100'>Happy clients</p>
                                    </div>
                                    <div className='h-8 w-px bg-yellow-400/50'></div>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold text-yellow-200'>15</h1>
                                        <p className='text-sm sm:text-base text-yellow-100'>Years of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0, duration: 0.4 }
                    }}>
                    <div className='w-[90%] lg:w-[70%] mx-auto text-center mt-40'>
                        <h1 className='text-5xl uppercase font-semibold  mb-4'>We are BAYMOH !!!</h1>
                        <p className='mb-12'>BAYMOH is a project that came about after years of extensive work during which we have learned various digital skills. Among the areas we currently offer are: 1. Audiovisual studio 2. Online education 3. Event organization</p>
                    
                        <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-6 mt-4'>
                            <div className='w-full md:w-[32%] text-start transition-all duration-300 hover:scale-[1.02]'>
                                <div className='bg-white text-black rounded-lg overflow-hidden shadow-xl hover:border-yellow-500'>
                                    <img 
                                        src={service1} 
                                        className='w-full h-48 object-cover'
                                        alt="Audiovisual Production"
                                    />
                                    <div className='px-4 py-4'>
                                        <h1 className='text-lg md:text-xl font-semibold mb-2'>1- Audiovisual Production</h1>
                                        <p className='text-sm md:text-base'>
                                            We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className='flex justify-center'>
                                    <button className='bg-yellow-600 hover:bg-yellow-400 py-3 border border-yellow-400 rounded-full w-[50%] mx-auto text-white font-medium transition-all duration-300 shadow-md shadow-yellow-900/30 hover:shadow-yellow-900/50'>
                                        <a href="">Learn more</a>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[32%] text-start transition-all duration-300 hover:scale-[1.02]'>
                                <div className='bg-white text-black rounded-lg overflow-hidden shadow-xl hover:border-yellow-500'>
                                    <img 
                                        src={service2} 
                                        className='w-full h-48 object-cover'
                                        alt="Digital Education"
                                    />
                                    <div className='px-4 py-4'>
                                        <h1 className='text-lg md:text-xl font-semibold mb-2'>2- Digital Education</h1>
                                        <p className='text-sm md:text-base'>
                                            We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className='flex justify-center'>
                                    <button className='bg-yellow-600 hover:bg-yellow-400 py-3 border border-yellow-400 rounded-full w-[50%] mx-auto text-white font-medium transition-all duration-300 shadow-md shadow-yellow-900/30 hover:shadow-yellow-900/50'>
                                        <a href="">Learn more</a>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full md:w-[32%] text-start transition-all duration-300 hover:scale-[1.02]'>
                                <div className='bg-white text-black rounded-lg overflow-hidden shadow-xl hover:border-yellow-500'>
                                    <img 
                                        src={service3} 
                                        className='w-full h-48 object-cover'
                                        alt="Virtual Events"
                                    />
                                    <div className='px-4 py-4'>
                                        <h1 className='text-lg md:text-xl font-semibold mb-2'>3- Virtual Events</h1>
                                        <p className='text-sm md:text-base'>
                                            We provide professional services in the field of photography and design, in all its forms and types. Whether it's producing a visual identity, a television commercial, or creating content for social media platforms, we are committed to delivering remarkable results.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className='flex justify-center'>
                                    <button className='bg-yellow-600 hover:bg-yellow-400 py-3 border border-yellow-400 rounded-full w-[50%] mx-auto text-white font-medium transition-all duration-300 shadow-md shadow-yellow-900/30 hover:shadow-yellow-900/50'>
                                        <a href="">Learn more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </AnimatedSection>
                </div>

                <div className='relative z-20 bg-gradient-to-b from-amber-900  via-amber-800 to-amber-900 py-16 px-4 sm:px-8 md:px-16 lg:px-32'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0, duration: 0.6, ease: "easeOut" }
                    }}>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h1 className='text-4xl sm:text-5xl font-bold uppercase mb-4 text-amber-100'>
                                Build Your Vision With Us
                            </h1>
                            <p className='text-xl sm:text-2xl text-amber-200 mb-12'>
                                Let's transform your creative potential into reality
                            </p>

                            <div className='mt-10 rounded-2xl overflow-hidden border-4 border-amber-700 shadow-2xl shadow-amber-900/30'>
                                <iframe 
                                    className='w-full aspect-video' 
                                    src="https://www.youtube.com/embed/Wc2cARkhr4k?si=FbL5Cq6mpGQa0jGa" 
                                    title="YouTube video player"  
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                />
                            </div>

                            <div className='mt-16'>
                                <Link
                                    to="contact" 
                                    smooth={true} 
                                    duration={500}
                                    offset={-50}
                                >
                                    <motion.div
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-xl sm:text-2xl font-semibold shadow-lg shadow-amber-900/30 text-white w-fit mx-auto transition-all duration-300"
                                    >
                                        Start Your Creative Journey
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    );
}