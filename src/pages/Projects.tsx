import youtubeLogo from '../assets/youtubeLogo.png'
import sadaqaImage from '../assets/sadaqa.jpeg'
import qawarirImage from '../assets/qawarir.png'
import elkalaImage from '../assets/elkala.jpeg'
import bklImage from '../assets/bkl.jpeg'
import { AnimatedSection } from '../animation/AnimationSection'
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <div className="overflow-hidden">
            <AnimatedSection
                className='w-full bg-gradient-to-b from-yellow-700 to-amber-900 py-20 md:py-24'
                config={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 }
                }}
            >
                <div className='w-[90%] max-w-6xl mx-auto text-center'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, scale: 0.9 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { 
                            delay: 0.2, 
                            type: 'spring',
                            stiffness: 100,
                            damping: 10
                        }
                    }}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block p-4 bg-amber-700/30 rounded-full backdrop-blur-sm border-2 border-amber-500/30"
                        >
                            <img 
                                src={youtubeLogo} 
                                alt='youtube logo' 
                                className='mx-auto w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg'
                            />
                        </motion.div>
                    </AnimatedSection>
                    
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { 
                            delay: 0.4,
                            type: 'spring',
                            stiffness: 100
                        }
                    }}>
                        <h1 className='text-4xl md:text-6xl font-bold uppercase mt-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
                            YouTube Projects Hub
                        </h1>
                    </AnimatedSection>
                    
                    <AnimatedSection config={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { 
                            delay: 0.6,
                            duration: 0.8
                        }
                    }}>
                        <p className='text-xl md:text-2xl text-amber-200 mt-6 max-w-2xl mx-auto leading-relaxed'>
                            Discover <span className='font-semibold text-amber-300'>innovative projects</span> and <span className='font-semibold text-amber-300'>premium content</span> on our YouTube channels
                        </p>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
            <AnimatedSection 
                className='w-full bg-gradient-to-b from-blue-700 to-sky-500 py-16 md:py-24'
                config={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.8 }
                }}
            >
                <div className='w-[90%] max-w-6xl mx-auto'>
                    <AnimatedSection config={{
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2 }
                    }}>
                        <h1 className='text-3xl md:text-4xl text-white font-bold uppercase text-center'>
                            YouTube Projects
                        </h1>
                    </AnimatedSection>
                    
                    <AnimatedSection config={{
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4 }
                    }}>
                        <p className='text-lg md:text-xl text-blue-100 text-center mt-3 mb-12'>
                            Explore our creative projects and channels
                        </p>
                    </AnimatedSection>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.5 }
                        }}>
                            <a href="#" className="block group">
                                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <img 
                                        src={sadaqaImage} 
                                        alt="Sadaqa Project" 
                                        className="w-full h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.6 }
                        }}>
                            <a href="#" className="block group">
                                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <img 
                                        src={qawarirImage} 
                                        alt="Qawarir Project" 
                                        className="w-full h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.7 }
                        }}>
                            <a href="#" className="block group">
                                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <img 
                                        src={elkalaImage} 
                                        alt="Elkala Project" 
                                        className="w-full h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.8 }
                        }}>
                            <a href="#" className="block group">
                                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <img 
                                        src={bklImage} 
                                        alt="BKL Project" 
                                        className="w-full h-48 md:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </AnimatedSection>
                    </div>
                </div>
            </AnimatedSection>


            <AnimatedSection
                className='w-full py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white'
                config={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 }
                }}
            >
                <div className='w-[90%] max-w-6xl mx-auto'>
                    <div className='text-center mb-12'>
                        <AnimatedSection config={{
                            initial: { opacity: 0, y: -20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.4 }
                        }}>
                            <h1 className='text-3xl md:text-5xl text-blue-900 font-bold uppercase'>
                                YouTube Projects Hub
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.6 }
                        }}>
                            <p className='text-lg md:text-xl text-blue-950 mt-4 max-w-2xl mx-auto'>
                                Explore our creative projects and channels on YouTube today.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 w-full'>
                        <AnimatedSection 
                            className='lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6 bg-white rounded-xl shadow-lg order-2 lg:order-1'
                            config={{
                                initial: { opacity: 0, x: -20 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: 0.8 }
                            }}
                        >
                            <h1 className='text-3xl md:text-4xl font-semibold text-blue-900 uppercase mb-4'>
                                Channel Showcase
                            </h1>
                            <p className='text-blue-800 mb-6'>
                                Discover innovative channels and their unique projects here.
                            </p>
                            <button className='px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition-colors duration-300'>
                                <a href="#" className='flex items-center gap-2'>
                                    View All 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </button>
                        </AnimatedSection>

                        <div className='lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 order-1 lg:order-2'>
                            {[
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/dfvdfgd-YbN9lWEn9oHZLj28.png",
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/instagrcfddam-Aq2oPx85oDtb6b2M.png",
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/gfggffg-dOq4Jj9ag5I5VlVm.png",
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/xdddvcv-Yleyo7Xa5wS6QrVG.png",
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/vxdvxv-AVLboOewoQTl4px6.png",
                                "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=296,fit=crop/mxB75M8GpXFPvRla/sssss-YZ9boDZg9vcMpale.png"
                            ].map((src, index) => (
                                <AnimatedSection 
                                    key={index}
                                    config={{
                                        initial: { opacity: 0, scale: 0.9 },
                                        animate: { opacity: 1, scale: 1 },
                                        transition: { delay: 0.5 + (index * 0.1) }
                                    }}
                                >
                                    <a href="#" className="block group">
                                        <div className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                            <img 
                                                src={src} 
                                                alt={`Channel ${index + 1}`}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </a>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}