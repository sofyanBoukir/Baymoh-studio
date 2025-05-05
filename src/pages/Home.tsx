import { AnimatedSection } from '../animation/AnimationSection';
import agLogo from '../assets/talata-logo.png';
import { motion } from 'framer-motion';
import bgTalata from '../assets/bgTalara.jpeg';
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
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bgTalata})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                <div className="absolute inset-0 bg-black/60 z-10"></div>

                <div className="relative z-20 w-[60%] mx-auto py-10 text-center flex flex-col items-center text-white">
                    <AnimatedSection config={{
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.2 }
                    }}>
                        <img src={agLogo} alt='logo' className='w-82 h-40' />
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.4 }
                    }}>
                        <h1 className='text-6xl font-semibold uppercase'>Studio talata</h1>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.6 }
                    }}>
                        <p className='text-xl'>Be with us we will be with you we are talata</p>
                    </AnimatedSection>
                    <br />
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
                                className="cursor-pointer bg-blue-600 px-6 py-2 rounded-full mt-4"
                            >
                                Contact
                            </motion.div>
                        </Link>
                    </AnimatedSection>
                </div>

                <div className='relative z-20 bg-gradient-to-b from color-to-blue to-sky-800 mt-20 text-white py-16 px-8 md:px-32'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0, duration: 0.8 }
                    }}>
                        <div className='flex flex-col lg:flex-row lg:w-[70%] w-[90%] mx-auto justify-between gap-8 lg:gap-16 py-8'>
                            <div className="w-full lg:w-[60%]">
                                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-4 md:mb-6'>Welcome</h1>
                                <p className='text-base sm:text-lg md:text-xl font-light leading-relaxed'>
                                    <span className='underline'>TALATA</span>, a leading company in the field of audiovisual production, digital education, and virtual events. We are proud to provide integrated solutions that help our clients excel in the rapidly evolving digital world.
                                    <br /><br />
                                    Since our establishment in 2022, despite the short duration, we have earned a distinguished reputation thanks to the expertise of our technical and creative team. We constantly strive to develop our skills and discover the latest technologies to be the ideal partner for our clients on their journey towards digital success.
                                </p>
                            </div>

                            <div className='w-full lg:w-[40%] flex flex-col gap-4'>
                                <div className='relative'>
                                    <img 
                                        src={talata} 
                                        alt="logo" 
                                        className='w-full h-auto max-h-64 object-cover'
                                    />
                                </div>
                                
                                <div className='bg-sky-600 p-4 rounded-lg text-white flex justify-between items-center mt-[-40px] z-10'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold'>+150</h1>
                                        <p className='text-sm sm:text-base'>Happy clients</p>
                                    </div>
                                    <div className='h-8 w-px bg-white/50'></div>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold'>15</h1>
                                        <p className='text-sm sm:text-base'>Years of experience</p>
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
                        <h1 className='text-5xl uppercase font-semibold'>We are talata</h1>
                        <p>TALATA is a project that came about after years of extensive work during which we have learned various digital skills. Among the areas we currently offer are: 1. Audiovisual studio 2. Online education 3. Event organization</p>
                    
                        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-6 mt-4'>
                            <div className='w-full md:w-[32%] text-start rounded-md bg-sky-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
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

                            <div className='w-full md:w-[32%] text-start rounded-md bg-sky-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
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

                            <div className='w-full md:w-[32%] text-start rounded-md bg-sky-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
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
                        </div>
                    </div>
                    </AnimatedSection>
                </div>

                <div className='relative z-20 bg-gradient-to-b from color-to-blue to-sky-800 text-white py-16 px-8 md:px-32'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0, duration: 0.4 }
                    }}>
                        <div className='lg:w-[60%] w-[90%] mx-auto text-center'>
                            <h1 className='text-5xl uppercase font-semibold'>We are talata</h1>
                            <p>let's develop your talent together</p>

                            <div className='mt-10 rounded-md'>
                                <iframe className='outline-none lg:w-[80%] w-[100%] mx-auto rounded-lg' height="460" src="https://www.youtube.com/embed/Wc2cARkhr4k?si=FbL5Cq6mpGQa0jGa" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    );
}