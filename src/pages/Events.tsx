import { AnimatedSection } from '../animation/AnimationSection';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import bodyLogo from '../assets/bodyImage.png'

export const Events = () => {
    return (
        <div className="min-h-screen overflow-hidden">
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

                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />

                    <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 py-10 text-center text-white">
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
                            initial: { opacity: 0, width: 0 },
                            animate: { opacity: 1, width: "60%" },
                            transition: { delay: 0.6, duration: 1 }
                        }}>
                            <div className='w-[60%] mx-auto h-[6px] my-6 bg-gradient-to-r from-transparent via-white to-transparent'></div>
                        </AnimatedSection>
                        
                        <AnimatedSection config={{
                            initial: { opacity: 0, y: -20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.8 }
                        }}>
                            <motion.h1 
                                className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-6 mb-4'
                                animate={{
                                    textShadow: ["0 0 8px rgba(255,255,255,0.3)", "0 0 16px rgba(255,255,255,0.5)", "0 0 8px rgba(255,255,255,0.3)"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                Coming Soon
                            </motion.h1>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: 1 }
                        }}>
                            <p className='text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed'>
                                Our website is under construction. We're working hard to bring you an amazing experience.
                            </p>
                        </AnimatedSection>


                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 1.8 }
                        }}>
                            <div className='flex justify-center gap-6 mt-8'>
                                {[
                                    { name: 'facebook', color: '#3b5998',link:'https://www.facebook.com/baymoh.prod/' },
                                    { name: 'instagram', color: '#e1306c',link:'https://www.instagram.com/baymoh_/' },
                                    { name: 'tiktok', color: '#010101', link:'https://www.tiktok.com/@baymoh_'}
                                ].map((social) => (
                                    <motion.a 
                                        key={social.name} 
                                        href={social.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                                        whileHover={{ 
                                            scale: 1.1,
                                            backgroundColor: `${social.color}80`
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2 + 0.1 * ['facebook', 'instagram', 'tiktok'].indexOf(social.name) }}
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            {social.name === 'facebook' && (
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                            )}
                                            {social.name === 'instagram' && (
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                            )}
                                            {social.name === 'tiktok' && (
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                            )}
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}