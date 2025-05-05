import { AnimatedSection } from '../animation/AnimationSection';
import agLogo from '../assets/talata-logo.png';
import { motion } from 'framer-motion';
import bgTalata from '../assets/bgTalara.jpeg';
import { Link } from 'react-scroll'
import talata from '../assets/talata.jpg';

export const Home = () => {
    return (
        <AnimatedSection
            config={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 }
            }}
        >
            <div className="relative w-full min-h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bgTalata})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Main Content */}
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

                <div className='relative z-20 color-to-blue mt-20 text-white py-16 px-8 md:px-32'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 1.0, duration: 0.8 }
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

                            {/* Image and Stats */}
                            <div className='w-full lg:w-[40%] flex flex-col gap-4'>
                                <div className='relative'>
                                    <img 
                                        src={talata} 
                                        alt="logo" 
                                        className='w-full h-auto max-h-64 object-cover rounded-lg shadow-lg'
                                    />
                                </div>
                                
                                <div className='bg-sky-600 p-4 rounded-lg text-white flex justify-between items-center'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold'>+150</h1>
                                        <p className='text-sm sm:text-base'>Happy clients</p>
                                    </div>
                                    <div className='h-8 w-px bg-white/50'></div>
                                    <div className='text-center'>
                                        <h1 className='text-2xl sm:text-3xl font-semibold'>+150</h1>
                                        <p className='text-sm sm:text-base'>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    );
};