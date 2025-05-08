import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import talataImage from '../assets/talata.jpg';
import { Link } from 'react-scroll';
import { AnimatedSection } from '../animation/AnimationSection';

export const Studio = () => {
    const images = [
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--2-h-m2WQrBENz8F27axG.png",
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--3-h-YD04pEb3EBC4n50v.png",
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mxB75M8GpXFPvRla/banner--33-h-dWxblLE8LgCbRLn8.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        setCurrentIndex(isFirstImage ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
    };

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="overflow-hidden">
            <AnimatedSection
                config={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1 }
                }}
            >
                <div className="relative w-full h-[200px] lg:h-[360px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute w-full h-full"
                        >
                            <motion.img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full lg:h-[360px] h-[200px] object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 5 }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <AnimatedSection config={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.5 }
                    }}>
                        <motion.button
                            onClick={goToPrevious}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-[40%] hidden lg:block left-5 text-white rounded-full w-12 h-12 text-2xl z-10 items-center justify-center cursor-pointer transition-all"
                        >
                            <svg width="40" height="50" color='white' viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g transform="scale(-1,1) translate(-14,0)">
                                    <path d="M1 25L13 13L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </motion.button>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, x: 20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.5 }
                    }}>
                        <motion.button
                            onClick={goToNext}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-[40%] hidden lg:block right-5 text-white rounded-full w-12 h-12 text-2xl z-10 items-center justify-center cursor-pointer transition-all"
                        >
                            <svg width="40" height="50" color='white' viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 25L13 13L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>        
                        </motion.button>
                    </AnimatedSection>

                    <AnimatedSection config={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.7 }
                    }}>
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                            {images.map((_, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${
                                        currentIndex === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                />
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            <AnimatedSection
                config={{
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 }
                }}
            >
                <div className='bg-gradient-to-b from-blue-950 to-sky-900 py-8'>
                    <div className='w-[100%] md:w-[70%] mx-auto text-center'>
                        <AnimatedSection config={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: 0.3 }
                        }}>
                            <motion.img 
                                className='mx-auto w-[100%] md:w-[50%] h-[500px] object-cover'
                                src={talataImage} 
                                alt="Studio Talata"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            />
                        </AnimatedSection>
                        
                        <AnimatedSection config={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.5 }
                        }}>
                            <div className='flex justify-center mt-[-110px]'>
                                <motion.p 
                                    className='text-4xl font-semibold uppercase rounded-sm py-5 bg-sky-800 text-white w-[95%] md:w-[60%]'
                                    whileHover={{ scale: 1.02 }}
                                >
                                    Creative Content Studio
                                </motion.p>
                            </div>
                        </AnimatedSection>
                        
                        <AnimatedSection config={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.7 }
                        }}>
                            <motion.span className='text-white block mt-8'>
                                Expert guidance in audiovisual production, studio rental, and original content creation awaits you here.
                            </motion.span>
                        </AnimatedSection>

                        <AnimatedSection config={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 0.8 }
                        }}>
                            <div className="mt-16 w-full px-4 md:px-8 lg:px-12 xl:px-0 max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                    {[
                                        { id: "content_creation", title: "Content Creation", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0000000000-dOq4NXQ7grT8x0oE.png" },
                                        { id: "visual_identity", title: "Visual Identity", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0-A1aJrgvv47fp6w9D.png" },
                                        { id: "photography", title: "Photography", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/000000-Yan9z2PPX5iOD2qL.png" },
                                        { id: "content_video", title: "Content Video", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=268,h=245,fit=crop/mxB75M8GpXFPvRla/00-AVLbND66jqSBKQVb.png" },
                                        { id: "marketing_digital", title: "Marketing Digital", img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,h=221,fit=crop/mxB75M8GpXFPvRla/untitled-2-mjEqNn13jDIQeO3O.png" }
                                    ].map((service, index) => (
                                        <AnimatedSection
                                            key={service.id}
                                            config={{
                                                initial: { opacity: 0, y: 30 },
                                                animate: { opacity: 1, y: 0 },
                                                transition: { delay: 0.5 + index * 0.1 }
                                            }}
                                        >
                                            <div className="group flex flex-col">
                                                <Link
                                                    to={service.id}
                                                    smooth={true}
                                                    duration={500}
                                                    className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                                >
                                                    <motion.img
                                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                                        src={service.img}
                                                        alt={service.title}
                                                        whileHover={{ scale: 1.05 }}
                                                    />
                                                </Link>
                                                <Link
                                                    to={service.id}
                                                    smooth={true}
                                                    duration={500}
                                                    className="mt-4 text-center"
                                                >
                                                    <motion.span
                                                        className="text-2xl uppercase font-bold text-white hover:text-sky-300 transition-colors cursor-pointer"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {service.title}
                                                    </motion.span>
                                                </Link>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>

                                <AnimatedSection config={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 1.2 }
                                }}>
                                    <div className='text-center mt-20 text-white'>
                                        <motion.h1 
                                            className='text-5xl font-semibold uppercase'
                                            animate={{
                                                textShadow: ["0 0 8px rgba(255,255,255,0.3)", "0 0 16px rgba(255,255,255,0.5)", "0 0 8px rgba(255,255,255,0.3)"],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            Creative Projects
                                        </motion.h1>
                                        <motion.span className='text-2xl font-semibold block mt-4'>
                                            Explore our diverse portfolio of innovative audiovisual creations.
                                        </motion.span>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </AnimatedSection>

            <div className='bg-gradient-to-b from-blue-950 to-sky-800 py-20'>
                <AnimatedSection
                    config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.3 }
                    }}
                >
                    <div className='mx-auto text-center' id='content_creation'>
                        <motion.div
                            className="block transition-all duration-300 hover:-translate-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0000000000-dOq4NXQ7grT8x0oE.png"
                                alt="Content Creation"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            />
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer mt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            Content Creation
                        </motion.h1>
                        
                        <motion.span className='text-xl font-semibold text-white block mt-4'>
                            Produce an engaging multimedia content series across podcast, Instagram Reels, YouTube videos, <br /> and targeted ads to captivate your audience.
                        </motion.span>

                        <motion.div
                            className='flex justify-between gap-3 lg:gap-0 flex-col lg:flex-row w-[90%] mx-auto mt-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {[
                                "https://www.youtube.com/embed/pzE8alwIIyk?si=QcvfrSSum-QkU8lz",
                                "https://www.youtube.com/embed/6W2QrNdDRlg?si=fCRDt12DImWBFJ2m",
                                "https://www.youtube.com/embed/dil3XmzfJCg?si=mNTjCJf-dA4XP-M1"
                            ].map((video, i) => (
                                <motion.iframe
                                    key={i}
                                    className='lg:w-[32%] rounded-md shadow-lg'
                                    height="315"
                                    src={video}
                                    title={`Content Creation video ${i+1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                />
                            ))}
                        </motion.div>

                        <motion.div className='my-16' />
                    </div>
                </AnimatedSection>

                <AnimatedSection
                    config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.5 }
                    }}
                >
                    <div className='mx-auto text-center' id='visual_identity'>
                        <motion.div
                            className="block transition-all duration-300 hover:-translate-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/0-A1aJrgvv47fp6w9D.png"
                                alt="Visual Identity"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                            />
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer mt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            Visual Identity
                        </motion.h1>
                        
                        <motion.span className='text-xl font-semibold text-white block mt-4'>
                            Produce an engaging multimedia content series across podcast, Instagram Reels, YouTube videos, <br /> and targeted ads to captivate your audience.
                        </motion.span>

                        <motion.div
                            className='grid grid-cols-3 lg:grid-cols-8 w-[90%] mx-auto mt-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {[
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fgsdfg-m7VKkqQ3E4IJW2BB.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-2-mnl95ZgWE4f48oEQ.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/sadaqa-2-Aq2oN1gWQ2TrZ8VJ.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/group-3-copy-dJo4NEQZlntM6rza.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fggsdfgh-mxB78EoMJ4Ua3RBl.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/0-1-YrDNX9gqyoHrk116.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/5555-dWxb0p3vGZfgPJN8.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/1-1-A3QJro62aaigbJWo.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/hero-text-effect-copy-AR0bV58LQjHGEOnQ.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-1-m5KbrpJMMOIK8Gz7.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/4-A0xVroz18asWKzN8.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/vector-smart-object-mp897egW8RuwNMpr.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/layer-2-ALpob0yeVMCZ3O8K.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/asset-3-dJo4NEQZEGhW3b1K.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/fdfgfgsrf-AVLbNWZ77QFqBklJ.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=245,fit=crop/mxB75M8GpXFPvRla/vgvsdfgf-AGB4vLQn50UZ2gZ6.png'
                            ].map((img, i) => (
                                <motion.img
                                    key={i}
                                    className='transition-transform duration-300 ease-in-out hover:scale-110'
                                    src={img}
                                    alt={`Visual Identity example ${i+1}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9 + i * 0.05 }}
                                />
                            ))}
                        </motion.div>

                        <motion.div className='my-16' />
                    </div>
                </AnimatedSection>

                <AnimatedSection
                    config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.5 }
                    }}
                >
                    <div className='mx-auto text-center' id='photography'>
                        <motion.div
                            className="block transition-all duration-300 hover:-translate-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                className="w-84 h-56 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=281,h=221,fit=crop/mxB75M8GpXFPvRla/000000-Yan9z2PPX5iOD2qL.png"
                                alt="Photography"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                            />
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer mt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            Photography
                        </motion.h1>
                        
                        <motion.span className='text-xl font-semibold text-white block mt-4'>
                            Turn on the lights, prepare the camera, say CHEESE
                        </motion.span>

                        <motion.div
                            className='grid grid-cols-3 lg:grid-cols-6 w-[90%] mx-auto mt-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0 }}
                        >
                            {[
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-9-AGB4vLawkMhVpzJp.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-4-mk39526bwXu7rB62.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-7-A0xVroORMvUbqbkr.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1a-mjE958RNrnsO9G50.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/ddd-A3QJplq6pvuLygw8.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1-m2WQron3W6cMRo7a.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1e-YbN9yOWwqntMDqE6.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-8-m2WQronZj7CMbWn0.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/ss-AGB4GzeQ6EhJLJB7.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-3-AGB4vLaRNBh1Jj2y.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-5-mxB78EOgQvHV6nkN.png',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/mxB75M8GpXFPvRla/untitled-1b-AoPGNn3wG4fDxb2V.png'
                            ].map((img, i) => (
                                <motion.img
                                    key={i}
                                    className='transition-transform duration-300 ease-in-out hover:scale-110'
                                    src={img}
                                    alt={`Photography example ${i+1}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1 + i * 0.05 }}
                                />
                            ))}
                        </motion.div>

                        <motion.div className='my-16' />
                    </div>
                </AnimatedSection>

                <AnimatedSection
                    config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.7 }
                    }}
                >
                    <div className='mx-auto text-center' id='content_video'>
                        <motion.div
                            className="block transition-all duration-300 hover:-translate-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                className="w-84 h-70 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=268,h=245,fit=crop/mxB75M8GpXFPvRla/00-AVLbND66jqSBKQVb.png"
                                alt="Content video"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.0 }}
                            />
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer mt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            Content video
                        </motion.h1>
                        
                        <motion.span className='text-xl font-semibold text-white block mt-4'>
                            Raising the level of brand presence - an indication that visual identity designs help to raise the level <br /> of brand presence and position.
                        </motion.span>

                        <motion.div
                            className='flex justify-between gap-3 lg:gap-0 flex-col lg:flex-row w-[90%] mx-auto mt-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {[
                                "https://www.youtube.com/embed/uZDPXFQYz0Q?si=Q7zE95rspJ-Yxf9x",
                                "https://www.youtube.com/embed/vtkQiLkNgOI?si=hbV9MSPlEu3SdlT6",
                                "https://www.youtube.com/embed/XpunFFS-n8I?si=d_-WHTAatb56L2oi"
                            ].map((video, i) => (
                                <motion.iframe
                                    key={i}
                                    className='lg:w-[32%] rounded-md shadow-lg'
                                    height="315"
                                    src={video}
                                    title={`Content video ${i+1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3 + i * 0.1 }}
                                />
                            ))}
                        </motion.div>

                        <motion.div className='my-16' />
                    </div>
                </AnimatedSection>

                <AnimatedSection
                    config={{
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.8 }
                    }}
                >
                    <div className='mx-auto text-center' id='marketing_digital'>
                        <motion.div
                            className="block transition-all duration-300 hover:-translate-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                className="w-84 h-70 object-cover mx-auto transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,h=221,fit=crop/mxB75M8GpXFPvRla/untitled-2-mjEqNn13jDIQeO3O.png"
                                alt="Marketing digital"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                            />
                        </motion.div>
                        
                        <motion.h1
                            className="text-4xl uppercase font-bold text-white transition-colors cursor-pointer mt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            Marketing digital
                        </motion.h1>
                        
                        <motion.span className='text-xl font-semibold text-white block mt-4'>
                            Transformez votre présence digitale en un véritable levier de croissance.
                        </motion.span>

                        <motion.div
                            className='flex justify-between gap-3 flex-col w-[60%] mx-auto mt-6'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            {[
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/whatsapp-image-2025-01-30-at-16.58.27_06232f5d-d957qxMPGJUPglEe.jpg',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/whatsapp-image-2025-01-30-at-16.58.27_9f049e87-mk3q6RnwJkF95WVn.jpg',
                                'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=936,fit=crop/mxB75M8GpXFPvRla/tiktok-lagalerie-des-montre-A1aBxMq561i6KNWr.PNG'
                            ].map((img, i) => (
                                <motion.img
                                    key={i}
                                    src={img}
                                    alt={`Marketing digital example ${i+1}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 + i * 0.1 }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};